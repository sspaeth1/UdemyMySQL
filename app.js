var faker =  require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ig_clone'
});

// for (var i = 0; i < 100 ; i++) {
//    console.log(Number(ran));
// };
var generate = 'SELEC{T CURDATE()';

//  function generateAddress(){
//   faker.internet.email();
//   faker.date.past();
//   faker.address.streetAdress();
//   faker.address.city();
//   faker.address.state();
// };

// generateAddress();

connection.query(generate, function( error, results, fields){
  if(error) throw error;
  console.log('The random address is ', results);
});
