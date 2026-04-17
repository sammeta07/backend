async function loginRoutes(fastify, options) {
  const bcrypt = require('bcrypt');

  // POST /login — login with email or mobile + password
  fastify.post('/login', async (request, reply) => {
    const { emailOrMobile, password } = request.body;

    if (!emailOrMobile || !password) {
      return reply.code(400).send({ message: 'Missing required fields: emailOrMobile, password', status: 400 });
    }

    // Check user by email or mobile
    const [rows] = await fastify.mysql.query(
      'SELECT * FROM users WHERE email = ? OR mobile = ?',
      [emailOrMobile, emailOrMobile]
    );

    if (rows.length === 0) {
      return reply.code(401).send({ message: 'Invalid email/mobile or password', status: 401 });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return reply.code(401).send({ message: 'Invalid email/mobile or password', status: 401 });
    }

    // Fetch group roles for this user
    const [groupRoles] = await fastify.mysql.query(
      'SELECT ugr.role, ugr.group_id, g.group_id AS group_code, g.name AS group_name FROM user_group_roles ugr JOIN `groups` g ON g.id = ugr.group_id WHERE ugr.user_id = ?',
      [user.id]
    );

    // Fetch event roles for this user (with group details via events table)
    let eventRoles = [];
    try {
      const [eventRows] = await fastify.mysql.query(
        `SELECT uer.role, uer.event_id, e.title AS event_title, e.group_id,
                g.group_id AS group_code, g.name AS group_name
         FROM user_event_roles uer
         JOIN events e ON e.id = uer.event_id
         JOIN \`groups\` g ON g.id = e.group_id
         WHERE uer.user_id = ?`,
        [user.id]
      );
      eventRoles = eventRows;
    } catch (_) {
      // events table may not exist yet
    }

    const token = fastify.jwt.sign({ id: user.id, email: user.email });

    return reply.code(200).send({
      message: 'Login successful',
      status: 200,
      data: {
        id: user.id,
        email: user.email,
        mobile: user.mobile,
        name: user.name,
        groupRoles: groupRoles.map(r => ({ groupId: r.group_id, groupCode: r.group_code, groupName: r.group_name, role: r.role })),
        eventRoles: eventRoles.map(r => ({ eventId: r.event_id, eventTitle: r.event_title, groupId: r.group_id, groupCode: r.group_code, groupName: r.group_name, role: r.role })),
        token
      }
    });
  });
}

module.exports = loginRoutes;
