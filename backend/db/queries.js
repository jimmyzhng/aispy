const db = require('./connection.js');

const createUser = (req, res) => {
  const { name, email } = request.body;

  db.query('INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`);
  });
};

module.exports = {
  createUser
};