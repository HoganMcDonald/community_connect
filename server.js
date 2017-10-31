const express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(5555, function() {
  console.log('server on 5555');
});
