const db = require('./connection.js');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Hashed password for security
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword], (error, result) => {
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

const getUser = (req, res) => {
  const { username } = req.body;

  db.query('SELECT * FROM users WHERE username = $1', [username], (error, result) => {
    if (error) {
      throw error;
    }

    res.status(200).json(result.rows);
  });
};

module.exports = {
  createUser,
  getUsers,
  getUser
};