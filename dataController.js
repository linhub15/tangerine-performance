'use strict';
let http = require('http');

exports.list_all_data = (req, res) => {
  http.get(url, response => {
    let body = '';
    response.on('data', data => { body += data; });
    response.on('end', () => {
      body = body.substring(2, body.length - 1);
      const parsedData = JSON.parse(body).data.Prices;
      res.json(parsedData)
    });
  });
}