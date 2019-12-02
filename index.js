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
const url = 'https://api.morningstar.com/service/mf/Price/Mstarid/F00000NNHK?callback=jQuery112405649102054153521_1575254671824&format=json&startdate=2008-01-01&enddate=2099-01-01&accesscode=j0vobmz6hyhf6nciuskoedmyj27nnl3i'