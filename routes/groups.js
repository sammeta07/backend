async function groupRoutes(fastify, options) {
  const bcrypt = require('bcrypt');
  const SALT_ROUNDS = 12;
  const { toCamelCase } = require('../utils');

  // POST /groups — fetch groups filtered by location & radius
  fastify.post('/groups', async (request, reply) => {
    const { locationCords, radiusInKm } = request.body || {};

    let groups;
    if (locationCords && locationCords.lat && locationCords.long && radiusInKm) {
      // Haversine formula to filter groups within radius
      const [rows] = await fastify.mysql.query(
        `SELECT *, 
          (6371 * acos(
            cos(radians(?)) * cos(radians(JSON_EXTRACT(location_cords, '$.lat'))) *
            cos(radians(JSON_EXTRACT(location_cords, '$.long')) - radians(?)) +
            sin(radians(?)) * sin(radians(JSON_EXTRACT(location_cords, '$.lat')))
          )) AS distance
        FROM \`groups\`
        HAVING distance <= ?
        ORDER BY distance`,
        [Number(locationCords.lat), Number(locationCords.long), Number(locationCords.lat), Number(radiusInKm)]
      );
      groups = rows;
    } else {
      const [rows] = await fastify.mysql.query('SELECT * FROM `groups` ORDER BY id');
      groups = rows;
    }

    if (groups.length === 0) {
      return { message: 'Groups fetched successfully', status: 200, data: [] };
    }

    const groupIds = groups.map(g => g.id);
    const [events] = await fastify.mysql.query(
      'SELECT * FROM events WHERE group_id IN (?) ORDER BY id',
      [groupIds]
    );

    // Fetch programs for all events
    const eventIds = events.map(e => e.id);
    let programsMap = {};
    if (eventIds.length > 0) {
      const [programs] = await fastify.mysql.query(
        'SELECT * FROM programs WHERE event_id IN (?) ORDER BY id',
        [eventIds]
      );
      for (const program of programs) {
        if (!programsMap[program.event_id]) programsMap[program.event_id] = [];
        program.location_cords = typeof program.location_cords === 'string' ? JSON.parse(program.location_cords) : (program.location_cords || {});
        program.photos = typeof program.photos === 'string' ? JSON.parse(program.photos) : (program.photos || []);
        programsMap[program.event_id].push(program);
      }
    }

    const eventsMap = {};
    for (const event of events) {
      if (!eventsMap[event.group_id]) eventsMap[event.group_id] = [];
      event.photos = typeof event.photos === 'string' ? JSON.parse(event.photos) : (event.photos || []);
      event.location_cords = typeof event.location_cords === 'string' ? JSON.parse(event.location_cords) : (event.location_cords || {});
      event.programs = programsMap[event.id] || [];
      eventsMap[event.group_id].push(event);
    }

    const data = groups.map(group => ({
      ...group,
      ...(group.distance !== undefined ? { distance: Math.round(group.distance * 100) / 100 } : {}),
      contact_numbers: typeof group.contact_numbers === 'string' ? JSON.parse(group.contact_numbers) : (group.contact_numbers || []),
      location_cords: typeof group.location_cords === 'string' ? JSON.parse(group.location_cords) : (group.location_cords || {}),
      admins: typeof group.admins === 'string' ? JSON.parse(group.admins) : (group.admins || []),
      events: eventsMap[group.id] || []
    }));

    return { message: 'Groups fetched successfully', status: 200, data: toCamelCase(data) };
  });

  // POST /create-group — create a new group
  fastify.post('/create-group', async (request, reply) => {
    console.info('Received POST /groups with body:', request.body);
    const { name, since, description, area, districtId, stateId, locationCords, groupContactNumbers, admins } = request.body;

    if (!name || !since || !description || !area || !districtId || !stateId) {
      return reply.code(400).send({ message: 'Missing required fields: name, since, description, area, districtId, stateId', status: 400 });
    }

    // Hash each admin's password before storing
    const hashedAdmins = await Promise.all(
      (admins || []).map(async (admin) => ({
        email: admin.email,
        contactNumber: admin.contactNumber,
        password: await bcrypt.hash(admin.password, SALT_ROUNDS)
      }))
    );

    // Insert with a temporary group_id, then update with initials + id
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase();
    const [result] = await fastify.mysql.query(
      'INSERT INTO `groups` (group_id, name, since, description, area, district_id, state_id, location_cords, contact_numbers, admins) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        `${initials}_temp`,
        name,
        since,
        description,
        area,
        districtId,
        stateId,
        JSON.stringify(locationCords || {}),
        JSON.stringify(groupContactNumbers || []),
        JSON.stringify(hashedAdmins)
      ]
    );

    const group_id = `${initials}_${result.insertId}`;
    await fastify.mysql.query('UPDATE `groups` SET group_id = ? WHERE id = ?', [group_id, result.insertId]);

    // Assign ADMIN role to each admin — register if not already a user
    for (const admin of admins || []) {
      if (admin.email) {
        let userId;
        const [userRows] = await fastify.mysql.query('SELECT id FROM users WHERE email = ?', [admin.email]);

        if (userRows.length > 0) {
          // User already exists
          userId = userRows[0].id;
        } else {
          // Register new user with the admin's details
          const hashedPwd = await bcrypt.hash(admin.password, SALT_ROUNDS);
          const [insertResult] = await fastify.mysql.query(
            'INSERT INTO users (email, mobile, name, password) VALUES (?, ?, ?, ?)',
            [admin.email, admin.contactNumber, admin.name || admin.email, hashedPwd]
          );
          userId = insertResult.insertId;
        }

        // Assign ADMIN role for this group
        await fastify.mysql.query(
          'INSERT IGNORE INTO user_group_roles (user_id, group_id, role) VALUES (?, ?, ?)',
          [userId, result.insertId, 'ADMIN']
        );
      }
    }

    return reply.code(201).send({
      message: 'Group created successfully',
      status: 201,
      data: toCamelCase({
        id: result.insertId,
        group_id,
        name,
        since,
        description,
        area,
        districtId,
        stateId,
        locationCords: locationCords || {},
        groupContactNumbers: groupContactNumbers || [],
        admins: hashedAdmins.map(a => ({ email: a.email, contactNumber: a.contactNumber })),
        events: []
      })
    });
  });

  // GET /groups/:id — fetch a single group with its events
  fastify.get('/groups/:id', async (request, reply) => {
    const { id } = request.params;

    const [rows] = await fastify.mysql.query('SELECT * FROM `groups` WHERE id = ?', [id]);
    if (rows.length === 0) {
      return reply.code(404).send({ message: 'Group not found', status: 404 });
    }

    const group = rows[0];
    const [events] = await fastify.mysql.query(
      'SELECT * FROM events WHERE group_id = ? ORDER BY id',
      [id]
    );

    // Fetch programs for this group's events
    const eventIds = events.map(e => e.id);
    let programsMap = {};
    if (eventIds.length > 0) {
      const [programs] = await fastify.mysql.query(
        'SELECT * FROM programs WHERE event_id IN (?) ORDER BY id',
        [eventIds]
      );
      for (const program of programs) {
        if (!programsMap[program.event_id]) programsMap[program.event_id] = [];
        program.location_cords = typeof program.location_cords === 'string' ? JSON.parse(program.location_cords) : (program.location_cords || {});
        program.photos = typeof program.photos === 'string' ? JSON.parse(program.photos) : (program.photos || []);
        programsMap[program.event_id].push(program);
      }
    }

    const data = {
      ...group,
      contact_numbers: typeof group.contact_numbers === 'string' ? JSON.parse(group.contact_numbers) : (group.contact_numbers || []),
      location_cords: typeof group.location_cords === 'string' ? JSON.parse(group.location_cords) : (group.location_cords || {}),
      admins: typeof group.admins === 'string' ? JSON.parse(group.admins) : (group.admins || []),
      events: events.map(event => ({
        ...event,
        photos: typeof event.photos === 'string' ? JSON.parse(event.photos) : (event.photos || []),
        location_cords: typeof event.location_cords === 'string' ? JSON.parse(event.location_cords) : (event.location_cords || {}),
        programs: programsMap[event.id] || []
      }))
    };

    return { message: 'Group fetched successfully', status: 200, data: toCamelCase(data) };
  });
}

module.exports = groupRoutes;
