var express = require('express');
var app = express();
let users = [];

//Cree un servidor que responda a "/" con "Hello World"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Cree un punto final que responda GETa /users con la lista de usuarios
app.get('/users', (req, res) => res.json(users)); 

//PORT 3000
app.listen(3000, function () {
  console.log('Server Running in port 3000!');
});


