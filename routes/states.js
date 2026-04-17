async function stateRoutes(fastify, options) {
  const { toCamelCase } = require('../utils');

  // GET /states — fetch all states
  fastify.get('/states', async (request, reply) => {
    const [states] = await fastify.mysql.query('SELECT id, name, state_id FROM states ORDER BY name');
    return { message: 'States fetched successfully', status: 200, data: toCamelCase(states) };
  });

  // GET /states/:id/districts — fetch districts of a state
  fastify.get('/states/:id/districts', async (request, reply) => {
    const { id } = request.params;

    const [stateRows] = await fastify.mysql.query('SELECT id, name FROM states WHERE id = ?', [id]);
    if (stateRows.length === 0) {
      return reply.code(404).send({ message: 'State not found', status: 404 });
    }

    const [districts] = await fastify.mysql.query(
      'SELECT id, name FROM districts WHERE state_id = ? ORDER BY name',
      [id]
    );

    return {
      message: 'Districts fetched successfully',
      status: 200,
      data: {
        state: stateRows[0],
        districts
      }
    };
  });
}

module.exports = stateRoutes;
