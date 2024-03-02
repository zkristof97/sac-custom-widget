var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use('/customwidgets', express.static(__dirname + '/dist'));

app.get('/', function(req, res){
    res.send('Hello World');
});