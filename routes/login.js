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

    const token = fastify.jwt.sign({ id: user.id, email: user.email, type: user.type });

    return reply.code(200).send({
      message: 'Login successful',
      status: 200,
      data: {
        id: user.id,
        email: user.email,
        mobile: user.mobile,
        name: user.name,
        type: user.type,
        token
      }
    });
  });
}

module.exports = loginRoutes;
