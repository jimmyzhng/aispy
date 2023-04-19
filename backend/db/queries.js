const db = require('./connection.js');
const bcrypt = require('bcrypt');

function hashPassword(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

const getUsers = (req, res) => {
  db.query('SELECT * FROM users ORDER BY id ASC', (error, result) => {
    if (error) {
      throw error;
    }

    res.status(200).json(result.rows);
  });
};

const getUserByUsername = (username) => {
  return db.query('SELECT * FROM users WHERE username = $1', [username])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashPassword(password)], (error, result) => {
    if (error) {
      throw error;
    }

    res.status(201).send(`User added with ID: ${result.rows[0].id}`);
  });
};




module.exports = {
  createUser,
  getUsers,
  getUserByUsername
};