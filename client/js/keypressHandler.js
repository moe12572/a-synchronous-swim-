
// $('body').on('keydown', (event) => {
//   var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
//   if (arrowPress) {
//     var direction = arrowPress[1];
//     SwimTeam.move(direction.toLowerCase());
//   }
// });
// const getRequest = require('./httpHandler.js');
const serverUrl = 'http://127.0.0.1:3000';

const getRequest = (cb) => {
  $.ajax({
    type: 'GET',
    // data: 'position',
    url: serverUrl,
    cache: false,
    contentType: false,
    processData: false,
    success: (data) => {
      // reload the pages
      // window.location = window.location.href;
      cb(data);
      console.log('initializing get request ', data);
      setTimeout(getRequest, 1000);
    }
  });
  // console.log('asdfasf');
}

$('body').on('keydown', (e) => {
  getRequest();
});

console.log('Client is running in the browser!');


