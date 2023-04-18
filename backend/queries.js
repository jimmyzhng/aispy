const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'jimmyzhng',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});
