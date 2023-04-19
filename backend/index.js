require('dotenv').config();

const express = require('express');
const db = require('./db/queries.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = express.Router();
const bcrypt = require('bcrypt');


app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/api/', router);
app.use(cookieParser());

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
    return res.status(401).send('Invalid email or password');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    res.cookie('userId', user.id);
    res.status(200).send(`Hello, ${user.username}!`);
    res.redirect('/');
  } else {
    res.status(401).send(`Invalid username or password.`);
  }
}
);

router.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.status(200).send('Logged Out.');
});

app.listen(port, () => {
  console.log(`AiSpy Express running on port ${port}.`);
});