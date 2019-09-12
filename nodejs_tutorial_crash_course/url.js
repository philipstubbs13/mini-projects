const url = require('url');

const address = 'http://localhost:8080/default.html?year=2017&month=february';

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query.month);