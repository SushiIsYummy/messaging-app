import pg from 'pg';
const { Pool } = pg;

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
const pool = new Pool({
  host: 'localhost', // or wherever the db is hosted
  user: process.env.DB_USER || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD || '',
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

export default pool;
