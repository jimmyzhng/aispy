const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'jimmyzhng',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const createUser = (req, res) => {
  const { name, email } = request.body;

  pool.query('INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`);
  });
};

module.exports = {
  createUser
};