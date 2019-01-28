// https://www.tangerine.ca/json/investment-funds-performance.json

var http = require('http');
/* 
    var morningstar = '//api.morningstar.com/service/mf/Price'
        var params = '?callback=?&format=json&username=morningstar&password=ForDebug&startdate=2008-01-01&enddate=2099-01-01'
        var incomeSrc = morningstar + '/mstarid/F000000S66' + params
        var balancedSrc = morningstar + '/mstarid/F000000S68' + params
        var growthSrc = morningstar + '/mstarid/F000000S6A' + params
        var dividendSrc = morningstar + '/Mstarid/F00000Y1ZY' + params
        var equitySrc = morningstar + '/Mstarid/F00000NNHK' + params
*/
// Equity Growth
const url = 'http://api.morningstar.com/service/mf/Price/Mstarid/F00000NNHK?callback=?&format=json&username=morningstar&password=ForDebug&startdate=2008-01-01&enddate=2099-01-01'

let log = value => { return value; }

function getEquityGrowthData(callback) {
  return http.get(url, (response) => {
    let body = '';
    response.on('data', data => { body += data; });
    response.on('end', () => {
      body = body.substring(2, body.length - 1);
      const parsedData = JSON.parse(body).data.Prices;
      callback(parsedData);
    });
  });
}


getEquityGrowthData(log);