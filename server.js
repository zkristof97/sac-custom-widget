var express = require('express');
var app = express();
app.listen(3000, function () {
  console.log('Express server has started on port 3000');
});

app.use('/customwidgets', express.static(__dirname + '/dist'));
app.use('/asset', express.static(__dirname + '/asset'));

app.get('/', function (req, res) {
  res.send('Hello World');
});
