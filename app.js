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

var User = mongo.model('User',{
    name: String,
    password: String,
});

//var admin = new User({name:"admin",password:"root"});
//admin.save(function(err){
//  if (err){
//    console.log(err);
//  }else{
//    console.log("user added");
//  }
//  User.find({}, function(err, item){
//    console.log(item);
//  });
//});

app.set('views', './build/templates');
app.set('view engine', 'pug');

// routes

app.use(express.static('/home/xamjo/portfolio/build'));

app.post('/autorization', jsonParse, function(req,res){
  User.find({name:req.body.name, password:req.body.password},function(err, item){
    if(item.length>0){
      var message = {status:'ok'};
    }
    else{
      var message = {status:'wrong'};
    };
    res.send(JSON.stringify(message));
  });
});

app.post('/saveMail', jsonParse, function(req, res){
  var mail = new Mail(req.body);
  mail.save(function(err){
    if (err){
      var message = {status:"error", error:err};
      res.send(JSON.stringify(message));
    }else{
      var items = [];
      Mail.find({}, function(err, item){
        item.forEach(function(i){
          items.push(i);
        });
        var message = {status:'sent',DBcontent:items};
        res.send(JSON.stringify(message));
      });
    };
  });
});

app.use(function(err,res,req){
  res.status(404);
  res.send('<h1>NOT FOUND!!!</h1><h2>404</h2>')
});

// run server

app.listen(3000, function(){
    console.log('listen 3000');
});
