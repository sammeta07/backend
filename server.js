require('dotenv').config();
const fastify = require('fastify')({ logger: true });

// 1. CORS Register (Frontend se connect karne ke liye)
fastify.register(require('@fastify/cors'), { 
  origin: "*" 
});

// 2. MySQL Connection
fastify.register(require('@fastify/mysql'), {
  connectionString: process.env.DATABASE_URL,
  promise: true
});

// 3. Database Check Route
fastify.get('/db-test', async (request, reply) => {
  try {
    const connection = await fastify.mysql.getConnection();
    const [rows] = await connection.query('SELECT 1');
    connection.release();
    return { status: "Connected", message: "Database connection successful", data: rows };
  } catch (err) {
    reply.code(500);
    return { status: "Error", message: "Database connection failed", error: err.message };
  }
});

// 4. Simple Test Route
fastify.get('/test', async (request, reply) => {
  return { message: "Project Samiti Backend is running!" };
});

// 5. Samiti Groups Data Route
const samitiGroups = require('./samitiData');
fastify.get('/groups', async (request, reply) => {
  return {
    message: "Groups fetched successfully",
    status: 200,
    data: samitiGroups
  };
});

// 6. Start Server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running at http://localhost:3000');
    
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