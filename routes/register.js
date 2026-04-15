async function registerRoutes(fastify, options) {
  const bcrypt = require('bcrypt');
  const SALT_ROUNDS = 12;

  // POST /register — register a new user
  fastify.post('/register', async (request, reply) => {
    const { email, mobile, name, password, type } = request.body;

    if (!email || !mobile || !name || !password || !type) {
      return reply.code(400).send({ message: 'Missing required fields: email, mobile, name, password, type', status: 400 });
    }

    // Check if user already exists
    const [existing] = await fastify.mysql.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return reply.code(409).send({ message: 'User with this email already exists', status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const [result] = await fastify.mysql.query(
      'INSERT INTO users (email, mobile, name, password, type) VALUES (?, ?, ?, ?, ?)',
      [email, mobile, name, hashedPassword, type]
    );

    return reply.code(201).send({
      message: 'User registered successfully',
      status: 201,
      data: {
        id: result.insertId,
        email,
        mobile,
        name,
        type
      }
    });
  });
}

module.exports = registerRoutes;
