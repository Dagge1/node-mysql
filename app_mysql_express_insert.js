// primjer insertanja podataka u MySQL sa Express get  -Node
// insertaj sa POST u Postman-u 

var express    = require("express");
var mysql      = require('mysql');
var app = express(); 

// MySQL
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

db.connect();
/*  alternativni način ubacivanja
var record= { name: 'Dagge', msg: 'First Node message' };
db.query('INSERT INTO chat SET ?', record);
*/

db.query("INSERT INTO chat (name, msg) VALUES ('Johan', 'Another from Node')");



app.listen(3000, function () {
	console.log('Node server is connected');
});
