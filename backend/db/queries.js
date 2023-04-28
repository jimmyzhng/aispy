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

const getUserByUsernameOrEmail = (username, email) => {
  return db.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

const createUser = (username, email, password) => {
  return db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashPassword(password)])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

const getVideoById = (id) => {
  return db.query('SELECT * FROM videos WHERE id = $1', [id])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

const getVideosByUserId = (id) => {
  return db.query('SELECT * FROM videos WHERE user_id = $1 ORDER BY date DESC', [id])
    .then(res => res.rows)
    .catch(err => console.log(err));
};


module.exports = {
  createUser,
  getUsers,
  getUserByUsername,
  getUserByUsernameOrEmail,
  getVideoById,
  getVideosByUserId
};