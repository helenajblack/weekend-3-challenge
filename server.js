var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;
var index = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', index);

app.listen(port, function () {
  console.log('Listening on port: ', port);
});

console.log('Server has started!');
