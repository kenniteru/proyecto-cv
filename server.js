var express = require('express');
var app = express();

app.use(express.static(__dirname));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Project: TOMAAAAAA!1'); 
  console.log('View it at http://%s:%s on your browser. ', host, port);
  console.log('Press Ctrl+C to interrupt execution. '); 
});
