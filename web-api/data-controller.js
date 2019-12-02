'use strict';
let https = require('https');
const url = build_url();

function list_all_data(callback) {
  https.get(url, (response) => {
    let body = '';
    response.on('data', data => { body += data; });
    response.on('end', () => {
      const parsedData = JSON.parse(body).data.Prices;
      callback(parsedData);
    });
  });
}

function build_url() {
  const base = 'https://api.morningstar.com/service/mf/Price/Mstarid';
  const mstarid = 'F00000NNHK' // Equity growth
  const format = 'format=json';
  const startdate = 'startdate=2008-01-01';
  const enddate = 'enddate=2099-01-01';
  const accessCode = 'accesscode=j0vobmz6hyhf6nciuskoedmyj27nnl3i';
  return `${base}/${mstarid}?${format}&${startdate}&${enddate}&${accessCode}`;
}

module.exports = {
  list_all_data,
}