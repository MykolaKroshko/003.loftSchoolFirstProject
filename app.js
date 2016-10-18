var express = require('express');
var app = express();

app.set('views', './build/templates');
app.set('view engine', 'pug');

// routes

app.get('/',function(req, res){
    res.send('Hello world!');
});

// run server

app.listen(3000, function(){
    console.log('listen 3000');
});