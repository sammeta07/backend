require('dotenv').config();
const fastify = require('fastify')({ logger: true });

// 1. CORS Register
const allowedOrigins = (process.env.ALLOWED_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map(o => o.trim());

fastify.register(require('@fastify/cors'), {
  origin: (origin, cb) => {
    // Allow requests with no origin (e.g. mobile apps, curl)
    if (!origin) return cb(null, true);
    // Allow any GitHub Codespaces domain
    if (origin.endsWith('.app.github.dev')) return cb(null, true);
    // Allow listed origins
    if (allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true
});

// 2. Cookie support
fastify.register(require('@fastify/cookie'));

// 3. JWT
fastify.register(require('@fastify/jwt'), {
  secret: process.env.JWT_SECRET
});

// 4. MySQL Connection (Aiven requires SSL)
fastify.register(require('@fastify/mysql'), {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  ssl: { rejectUnauthorized: false },
  promise: true
});

// 5. Register Routes
fastify.register(require('./routes/groups'));
fastify.register(require('./routes/register'));
fastify.register(require('./routes/login'));
fastify.register(require('./routes/states'));

// Start Server
const start = async () => {
  try {
    const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server is running at http://localhost:${PORT}`);
    
    // Initial DB Connection Check  
    try {
      const connection = await fastify.mysql.getConnection();
      console.log('✅ Database connected successfully');
      connection.release();
    } catch (dbErr) {
      console.error('❌ Database connection failed:', dbErr.message);
    }

  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();