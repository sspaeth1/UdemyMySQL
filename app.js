var express = require('express');
var app = express();
var mysql = require('mysql');
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mailerappusers'
});



app.get('/', function(req, res){
  var q = 'SELECT COUNT(*) AS count FROM users';
  connection.query(q, function( err, results){
    if(err)throw err;
    var  count = results[0].count;
    // console.log('ERROR ' + err);
    // console.log('RESULT ' + results);
      res.render('home', {count: count});
    //  res.send("Enter your email to join " + count +  " others on our waitlist." );
   console.log(results);
    });
});

app.post('/register', function(req, res){
  var person = { email: req.body.email};
  connection.query('INSERT INTO users set ?', person, function(err, result){
    if (err) throw err;
    console.log(result);
    res.redirect('/');

  });
  // console.log('go to register ' + req.body.email);
});


app.listen(3000, function(){console.log('server started on port 3000');});
