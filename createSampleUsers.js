var express = require('express');
var app = express();
var faker =  require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mailerappusers'
});

// for (var i = 0; i < 100 ; i++) {
//    console.log(Number(ran));
// };


//  function generateAddress(){
//   faker.internet.email();
//   faker.date.past();
//   faker.address.streetAdress();
//   faker.address.city();
//   faker.address.state();
// };

// generateAddress();
// var q = 'INSERT INTO users (email) VALUES ("wyattt_the_dog@gmail.com")';
// connection.query(q, function( error, results, fields){
//   if(error) throw error;
//   console.log(results[1].email);
// });

// function makeNames(amount){
//   for(var i = 0; i < amount ; i++) {
//       faker.internet.email();
//    }
// };

var data =[];
var num = 0;
for (var i = 0; i <= num ; i++) {
  data.push( [faker.internet.email(), faker.date.past()]);
};

// console.log([data]);

var q = 'INSERT INTO users (email, time_at) VALUES ? ';
connection.query(q, [data], function( err, result){
  console.log('ERROR ' + err);
  console.log('RESULT ' + result);
});


app.listen(3000, process.env.port, function(){console.log('server started on port 3000');})
