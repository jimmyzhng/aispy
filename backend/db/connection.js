const { Pool } = require('pg');

const db = new Pool({
  user: 'jimmyzhng',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

db.connect(() => {
  console.log("Connected to AiSpy Database");
});

module.exports = db;

