import { IncomingMessage } from "http";

let http = require('http');
const url = 'http://api.morningstar.com/service/mf/Price/Mstarid/F00000NNHK?callback=?&format=json&username=morningstar&password=ForDebug&startdate=2008-01-01&enddate=2099-01-01'

http.get(url, (message: IncomingMessage) => {
  let body = '';
  message.on('data', (data: string) => { return body += data ;} );
  message.on('end', () => {
    body = body.substring(2, body.length - 1);
    body = JSON.parse(body).data.Prices;
    console.log(body);
  });
});