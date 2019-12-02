'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(
  port,
  () => console.log(`Tangerine Performance graph RESTful API server started on: ${port}`));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Bind Routes
const data = require('./data-controller.js');

// End points
app.get('/data', (req, res) => {
  data.list_all_data((results) => {
    res.send(results);
  })
});