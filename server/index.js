const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json();

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`The server is listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('HELLO WORLD !');
});

app.post('/users', jsonParser, (req, res) => {
  const userName = req.body.users.name;
  console.log(userName);
});
