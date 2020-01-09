var express = require('express');
var app = express();
let users = [];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users', (req, res) => res.json(users));

app.listen(3000, function () {
  console.log('Server Running in port 3000!');
});