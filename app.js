var express = require('express');
var parser = require('body-parser');
var mongo = require('mongoose');

var app = express();
var jsonParse = parser.json();
mongo.connect('mongodb://localhost/portfolioDB',{});

var Mail = mongo.model('Mail',{
    name: String,
    mail: String,
    massage: String
});

app.set('views', './build/templates');
app.set('view engine', 'pug');

// routes

app.use(express.static('./build'));

//app.get('/',function(req, res){
//    res.send('Hello world!');
//});

app.post('/saveMail', function(req, res){
    console.log('mail');
    //var mail = new Mail(req.body);
//    mail.save(function(err){
//	if (err){
//	    res.send('error'+err);
//	}else{
//	    res.send('mail sent')
//	}
//    });
});

// run server

app.listen(3000, function(){
    console.log('listen 3000');
});