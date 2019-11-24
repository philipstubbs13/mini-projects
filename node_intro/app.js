var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

  // myReadStream.on('data', function (chunk) {
  //   console.log('new chunk received:');
  //   console.log(chunk);
  //   myWriteStream.write(chunk);
  // });

  myReadStream.pipe(res);

  // res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo daws, now listening to port 3000');