async function groupRoutes(fastify, options) {

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
