var express = require('express');
var app = express();
let users = [];

//Create a Server that would answer to "/" with "Hello World"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Create an endpoint that would answer to GET to /users with the list of users
app.get('/users', (req, res) => res.json(users));

//Create an endpoint to GET to /user/:id
app.get('/user/:id', (req, res) => {
    let user = users.find(user => user.id == req.params.id);
    res.json(user);
});

app.listen(3000, function () {
  console.log('Server Running in port 3000!');
});