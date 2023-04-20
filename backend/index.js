require('dotenv').config();


const session = require('express-session');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const db = require('./db/queries.js');
const bodyParser = require('body-parser');
const port = 3001;
const bcrypt = require('bcrypt');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //   httpOnly: true,
  //   secure: true,
  //   maxAge: 12345612356,
  //   sameSite: 'none'
  // }
}));

// Debugging
app.use((req, res, next) => {
  console.log('Session data:', req.session);
  next();
});

app.use('/api/', router);

router.get('/', (req, res) => {
  res.status(200).send('Hello!');
});

router.get('/users', db.getUsers);

router.get('/session', (req, res) => {
  // console.log('line 48 req.session', req.session);

  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).send('Not logged in!');
  }

});

// User signing up
router.post('/users', db.createUser);

// User logging in and out
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.getUserByUsername(username);

  if (!user) {
    return res.status(401).send('User does not exist!');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {

    req.session.user = user;
    console.log('req.session', req.session);
    res.json({ success: true });
  } else {
    res.status(401).send(`Invalid username or password.`);
  }
}
);

router.post('/logout', (req, res) => {
  req.session = null;
  res.status(200).send('Logged Out.');
});

app.listen(port, () => {
  console.log(`AiSpy Express running on port ${port}.`);
});