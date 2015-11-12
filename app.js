#!/bin/env node

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var express = require('express');
var fs = require('fs');

var app = express();
var index = fs.readFileSync('index.html');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.end(index);
})

app.listen(port, ipaddr, function() {
  console.log('Running in ' + ipaddr + ':' + port);
});
