async function groupRoutes(fastify, options) {
  const bcrypt = require('bcrypt');
  const SALT_ROUNDS = 12;

  // GET /groups — fetch all groups with their events
  fastify.get('/groups', async (request, reply) => {
    const [groups] = await fastify.mysql.query('SELECT * FROM groups ORDER BY id');

    if (groups.length === 0) {
      return { message: 'Groups fetched successfully', status: 200, data: [] };
    }

    const groupIds = groups.map(g => g.id);
    const [events] = await fastify.mysql.query(
      'SELECT * FROM events WHERE group_id IN (?) ORDER BY id',
      [groupIds]
    );

    const eventsMap = {};
    for (const event of events) {
      if (!eventsMap[event.group_id]) eventsMap[event.group_id] = [];
      event.images = typeof event.images === 'string' ? JSON.parse(event.images) : (event.images || []);
      eventsMap[event.group_id].push(event);
    }

    const data = groups.map(group => ({
      ...group,
      contact_numbers: typeof group.contact_numbers === 'string' ? JSON.parse(group.contact_numbers) : (group.contact_numbers || []),
      admins: typeof group.admins === 'string' ? JSON.parse(group.admins) : (group.admins || []),
      events: eventsMap[group.id] || []
    }));

    return { message: 'Groups fetched successfully', status: 200, data };
  });

  // POST /groups — create a new group
  // POST /groups — create a new group
  fastify.post('/groups', async (request, reply) => {
    console.log('Received POST /groups with body:', request.body);
    const { name, since, description, area, districtId, stateId, locationCords, groupContactNumbers, admins } = request.body;

    if (!name || !since || !description || !area || !districtId || !stateId) {
      return reply.code(400).send({ message: 'Missing required fields: name, since, description, area, districtId, stateId', status: 400 });
    }

    // Auto-generate group_id from name initials + timestamp
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase();
    const group_id = `${initials}_${Date.now()}`;

    // Hash each admin's password before storing
    const hashedAdmins = await Promise.all(
      (admins || []).map(async (admin) => ({
        email: admin.email,
        contactNumber: admin.contactNumber,
        password: await bcrypt.hash(admin.password, SALT_ROUNDS)
      }))
    );

    const [result] = await fastify.mysql.query(
      'INSERT INTO groups (group_id, name, since, description, area, district_id, state_id, location_cords, contact_numbers, admins) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        group_id,
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

    return reply.code(201).send({
      message: 'Group created successfully',
      status: 201,
      data: {
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
        admins: hashedAdmins.map(a => ({ email: a.email, contactNumber: a.contactNumber })), // never return passwords
        events: []
      }
    });
  });

  // GET /groups/:id — fetch a single group with its events
  fastify.get('/groups/:id', async (request, reply) => {
    const { id } = request.params;

    const [rows] = await fastify.mysql.query('SELECT * FROM groups WHERE id = ?', [id]);
    if (rows.length === 0) {
      return reply.code(404).send({ message: 'Group not found', status: 404 });
    }

    const group = rows[0];
    const [events] = await fastify.mysql.query(
      'SELECT * FROM events WHERE group_id = ? ORDER BY id',
      [id]
    );

    const data = {
      ...group,
      contact_numbers: typeof group.contact_numbers === 'string' ? JSON.parse(group.contact_numbers) : (group.contact_numbers || []),
      admins: typeof group.admins === 'string' ? JSON.parse(group.admins) : (group.admins || []),
      events: events.map(event => ({
        ...event,
        images: typeof event.images === 'string' ? JSON.parse(event.images) : (event.images || [])
      }))
    };

    return { message: 'Group fetched successfully', status: 200, data };
  });
}

module.exports = groupRoutes;
