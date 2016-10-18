var express = require('express');
var parser = require('body-parser');
var mongo = require('mongoose');

var app = express();
var jsonParse = parser.json();
mongo.connect('mongodb://localhost/portfolioDB');

var Mail = mongo.model('Mail',{
    name: String,
    mail: String,
    message: String
});

app.set('views', './build/templates');
app.set('view engine', 'pug');

// routes

app.use(express.static('./build'));

//app.get('/',function(req, res){
//    res.send('Hello world!');
//});

app.post('/saveMail', jsonParse, function(req, res){
//    console.log(req.body);
    var mail = new Mail(req.body);
    mail.save(function(err){
	if (err){
	    var message = {status:"error", error:err}
	    res.send(JSON.stringify(message));
	}else{
	    res.send('{"status":"sent"}')
	}
    });
});

// run server

app.listen(3000, function(){
    console.log('listen 5000');
});