const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypressHandler = require('./keypressHandler');
const msg = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
  }


  if (req.method === 'GET') {
    // var position = ['up', 'down', 'left', 'right'];
    // var randomIndex = Math.floor(Math.random() * 4);
    // res.write(position[randomIndex]);
    // res.write('');
    res.writeHead(200, headers);
    // console.log('------------', req.url, this.backgroundImageFile);
    if (req.url === this.backgroundImageFile) {
      console.log(multipart.getFile('a'));
      if (multipart.getFile('nameoftheimage') === null) {
        res.writeHead(404, headers);
      }
    }
    var a = msg.dequeue();
    if(a !== undefined) {
      res.write(a);
    }
  }
  res.end();

  next(); // invoke next() at the end of a request to help with testing!
};
