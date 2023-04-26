const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');
const bcrypt = require('bcrypt');

// Check if logged in
router.get('/', (req, res) => {
  if (req.session.user) {
    res.send({ isLoggedIn: true, user: req.session.user });
  } else {
    res.send({ isLoggedIn: false });
  }
});

// User logging in and out
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.getUserByUsername(username);

  if (!user) {
    return res.status(401).send('User does not exist!');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(401).send(`Invalid username or password.`);
  }
  req.session.user = user;
  res.send({ success: true });
}
);

module.exports = router;