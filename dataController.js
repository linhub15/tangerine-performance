'use strict';
let http = require('http');
const url = 'http://api.morningstar.com/service/mf/Price/Mstarid/F00000NNHK?callback=?&format=json&username=morningstar&password=ForDebug&startdate=2008-01-01&enddate=2099-01-01'

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