import express from 'express';
import bodyParser from 'body-parser';

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

app.get('/', (req, res) => {
  const users = {
    username: 'bobby',
    password: 'lool',
  };
  res.send(users);
});

app.post('/users', jsonParser, (req, res) => {
  const userName = req.body.users.name;
  console.log(userName);
});
