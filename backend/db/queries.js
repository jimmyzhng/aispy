const db = require('./connection.js');

const createUser = (req, res) => {
  const { username, email, password } = req.body;

  db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password], (error, result) => {
    if (error) {
      throw error;
    }

    res.status(201).send(`User added with ID: ${result.rows[0].id}`);
  });
};

const getUsers = (req, res) => {
  db.query('SELECT * FROM users ORDER BY id ASC', (error, result) => {
    if (error) {
      throw error;
    }

    res.status(200).json(result.rows);
  });
};

module.exports = {
  createUser,
  getUsers
};