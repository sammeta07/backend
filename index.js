require('dotenv').config();
const fastify = require('fastify')({ logger: true });

// 1. CORS Register (Frontend se connect karne ke liye)
fastify.register(require('@fastify/cors'), { 
  origin: "*" 
});

// 2. MySQL Connection
fastify.register(require('@fastify/mysql'), {
  connectionString: process.env.MYSQL_URL,
  promise: true
});

// 3. Register Routes
fastify.register(require('./routes/groups'));

// 6. Start Server
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