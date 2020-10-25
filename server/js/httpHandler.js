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
  // console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
  }

  if (req.method === 'POST') {
    this.backgroundImageFile = path.join('.', req.url);
    res.writeHead(201, headers);
  }


  //GET request for swim command


  console.log('------------', req.url);
  // GET request for background image

  // http://127.0.0.1:3000/background.jpg


  if(req.method === 'GET') {
    if (req.url === '/') {
      var a = msg.dequeue();
      if (a !== undefined) {
        res.write(a);
      }
      res.writeHead(200, headers);
      res.end();
    } else if (req.url === '/background.jpg') {
      // fs.readFile(this.backgroundImageFile)
      // console.log('1231223112323123', this.backgroundImageFile);
      // res.writeHead(404, headers);
      fs.readFile(module.exports.backgroundImageFile, (err, data) => {
        if (err) {
          res.writeHead(404, headers);
        } else {
          res.writeHead(200, headers);
          res.write(data, 'binary');
        }
        res.end();
        next();
      });
    }


  }




  // else if ((req.method === 'GET') && (req.url !== '/background.jpg') && (req.url !== '/')) {
  //   res.writeHead(404, headers);
  // }





  res.end();

  next(); // invoke next() at the end of a request to help with testing!
};
