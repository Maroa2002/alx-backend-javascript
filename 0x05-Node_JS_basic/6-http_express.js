const express = require('express');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
