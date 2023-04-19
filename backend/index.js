require('dotenv').config();


const session = require('express-session');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const db = require('./db/queries.js');
const bodyParser = require('body-parser');
const port = 3001;

// const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use(cookieParser());
app.use(session({
  secret: '12345',
  resave: false,
  saveUninitialized: false
}));
app.use('/api/', router);
app.use((req, res, next) => {
  console.log('Session data:', req.session);
  next();
});

router.get('/', (req, res) => {
  res.status(200).send('Hello!');
});

router.get('/users', db.getUsers);

// User signing up
router.post('/users', db.createUser);

// User logging in and out
router.post('/login', async (req, res) => {
  // console.log('req.body', req.body);
  const { username, password } = req.body;
  const user = await db.getUserByUsername(username);

  if (!user) {
    return res.status(401).send('User does not exist!');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    // res.cookie('userId', user.id);
    req.session.userId = user.id;
    console.log('req.session', req.session);
    res.json({ success: true });
  } else {
    res.status(401).send(`Invalid username or password.`);
  }
}
);

router.post('/logout', (req, res) => {
  res.session = null;
  res.status(200).send('Logged Out.');
});

app.listen(port, () => {
  console.log(`AiSpy Express running on port ${port}.`);
});