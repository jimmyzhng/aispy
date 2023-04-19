require('dotenv').config();

const express = require('express');
const db = require('./db/queries.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).send('Hello!');
});

app.get('/users', db.getUsers);

// User signing up
app.post('/users', db.createUser);

// User logging in and out
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const result = db.getUser(username);
  const user = result.rows[0];

  if (!user) {
    res.status(401).send('Invalid email or password');
  } else {
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      res.cookie('userId', user.id);

      res.status(200).send(`Hello, ${user.username}!`);
    } else {
      res.status(401).send(`Invalid username or password.`);
    }
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.status(200).send('Logged Out.');
});

app.listen(port, () => {
  console.log(`AiSpy Express running on port ${port}.`);
});