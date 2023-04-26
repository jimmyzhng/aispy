require('dotenv').config();

const session = require('express-session');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const helmet = require("helmet");

const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const videoRouter = require('./routes/videos');
const awsRouter = require('./routes/aws');

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(helmet());

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: parseInt(process.env.SESSION_MAX_AGE) }
}));

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/videos', videoRouter);
app.use('/api/aws', awsRouter);


app.listen(port, () => {
  console.log(`AiSpy Express running on port ${port}.`);
});

module.exports = app;