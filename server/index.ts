import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  }
  console.log(`The server is listening on port ${port}`);
});