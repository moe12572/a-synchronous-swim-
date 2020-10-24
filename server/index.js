


const keypressHandler = require('./js/keypressHandler');
const messageQueue = require('./js/messageQueue.js');

keypressHandler.initialize(message => {
  console.log(`Message received: ${message}`);
  messageQueue.enqueue(message);
});



const httpHandler = require('./js/httpHandler');


const http = require('http');
const server = http.createServer(httpHandler.router);
console.log(server);

const port = 3000;
const ip = '127.0.0.1';

server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);