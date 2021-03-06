(function() {

  const serverUrl = 'http://127.0.0.1:3000'/background.jpg;

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);

    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  const getCommandRequest = () => {
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
        // cb(data);
        SwimTeam.move(data);
        console.log('initializing get request ', data);
        setTimeout(getRequest, 1000);
      },
      error: (e) => {
        console.log('error');
      }
    });
    // console.log('asdfasf');
  }


  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });
  // getCommandRequest();
})();


