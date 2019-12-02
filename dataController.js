'use strict';
let https = require('https');
const url = 'https://api.morningstar.com/service/mf/Price/Mstarid/F00000NNHK?callback=jQuery112405649102054153521_1575254671824&format=json&startdate=2008-01-01&enddate=2099-01-01&accesscode=j0vobmz6hyhf6nciuskoedmyj27nnl3i'

function list_all_data(callback) {
  https.get(url, (response) => {
    let body = '';
    response.on('data', data => { body += data; });
    response.on('end', () => {
      body = sanitize(body);
      const parsedData = JSON.parse(body).data.Prices;
      callback(parsedData);
    });
  });
}

/** The data from morning star is wrapped with
 *  jQuery<random_chars>_<random_chars>({<data>})
 *  @returns {string} in json format {<data>}
 */
function sanitize(responseString) {
  const firstOccurance = responseString.indexOf("(");
  return responseString
    .substring(
      firstOccurance + 1,
      responseString.length - 1);
}

module.exports = {
  list_all_data,
}