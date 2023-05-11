const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');

router.get('/', db.getUsers);

// User signing up
router.post('/', async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send("Credentials missing.");
  }

  try {
    const existingUser = await db.getUserByUsernameOrEmail(username, email);

    if (existingUser) {
      return res.status(409).send("User exists already.");
    }

    await db.createUser(username, email, password);
    const user = await db.getUserByUsername(username);
    req.session.user = user;
    res.send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while signing up.');
  }
});

module.exports = router;