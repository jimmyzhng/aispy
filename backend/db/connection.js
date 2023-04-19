const { Pool } = require('pg');
require('dotenv').config();


const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

db.connect(() => {
  console.log("Connected to AiSpy Database");
});

module.exports = db;

