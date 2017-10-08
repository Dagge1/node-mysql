// primjer fetchanja podataka iz MySQL sa Node

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

connection.connect();

connection.query('SELECT * from chat', function(err, rows, fields) {
  if (!err)
    console.log(rows);  // prikaži sve unose u tabeli chat
  else
    console.log('Error while performing Query.');
});

connection.end();

