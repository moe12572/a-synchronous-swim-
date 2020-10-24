
<<<<<<< HEAD
debugger;
=======
>>>>>>> 0a7ac52f7d4f62b54039b16497896e60a586bd11

const keypressHandler = require('./js/keypressHandler');

keypressHandler.initialize(message => console.log(`Message received: ${message}`));

const httpHandler = require('./js/httpHandler');


const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
