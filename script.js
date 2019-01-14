var request = require("request");
var fs = require('fs');
// Get Request
request.get('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function(err) {
  throw err;
})

// Response to log HTTPS response code
.on('response', function (response) {
    console.log('Response Status Code: ', response.statusMessage)
    console.log('Downloading Image: ', response.headers['content-type'])
})
.pipe(fs.createWriteStream('./downloaded.html'));