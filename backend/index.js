require('dotenv').config();

const express = require('express');
const db = require('./queries');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.post('/users', db.createUser);

app.listen(port, () => {
  console.log(`AiSpy Express running on port ${port}.`);
});