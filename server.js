// Setup Server
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);
console.log('Tangerine Performance graph RESTful API server listening on port:' + port);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Bind Routes
var data = require('./dataController');
app.route('/data').get(data.list_all_data);

