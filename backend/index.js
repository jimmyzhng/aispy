require('dotenv').config();

const express = require('express');
const db = require('./db/queries.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/users', db.getUsers);
app.post('/users', db.createUser);

app.listen(port, () => {
  console.log(`AiSpy Express running on port ${port}.`);
});