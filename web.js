var express = require('express');

var app = express.createServer(express.logger());

var buff2 = fs.readFileSync('index.html', 'utf-8');
var buff1 = buffer.toString();

app.get('/', function(request, response) {
  response.send(buff2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
