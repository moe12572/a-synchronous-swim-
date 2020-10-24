
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

// const serverUrl = 'http://127.0.0.1:3000';

// const getRequest = () => {
//   $.ajax({
//     type: 'GET',
//     // data: 'position',
//     url: serverUrl,
//     cache: false,
//     contentType: false,
//     processData: false,
//     success: (data) => {
//       // reload the pages
//       // window.location = window.location.href;
//       SwimTeam.move(data);

//       console.log('initializing get request ', data);
//       setTimeout(getRequest, 100);
//     }
//   });
//   // console.log('asdfasf');
// }

// $('body').on('keydown', (e) => {
//   getRequest();
// });

// console.log('Client is running in the browser!');


