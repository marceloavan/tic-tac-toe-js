var express = require('express');
var fs = require('fs');

var app = express();
var index = fs.readFileSync('index.html');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.end(index);
})

app.listen(3000);
console.log('Running in localhost 3000');
