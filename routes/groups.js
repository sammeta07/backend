const data = require('../data');

const eventSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    title: { type: 'string' },
    year_count: { type: 'integer' },
    start_date: { type: 'string' }, // defaults to format: date-time or date in fastify if format specified, but string is safer if format varies
    end_date: { type: 'string' },
    location: { type: 'string' },
    description: { type: 'string' },
    images: { type: 'array', items: { type: 'string' } }
  }
};

const groupSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    group_id: { type: 'string' },
    name: { type: 'string' },
    location: { type: 'string' },
    since: { type: 'integer' },
    description: { type: 'string' },
    contact_numbers: { type: 'array', items: { type: 'string' } },
    admins: { type: 'array' }, // items unknown based on sample
    events: { type: 'array', items: eventSchema }
  }
};

const getGroupsSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        status: { type: 'integer' },
        data: { type: 'array', items: groupSchema }
      }
    }
  }
};

async function groupRoutes(fastify, options) {
  fastify.get('/groups', { schema: getGroupsSchema }, async (request, reply) => {
    return {
      message: "Groups fetched successfully",
      status: 200,
      data: data
    };
  });
}

module.exports = groupRoutes;
