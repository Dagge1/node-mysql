// primjer fetchanja podataka iz MySQL sa Express get  -Node
// fetchaj sa GET u Postman-u, dobit ćeš JSON formatirane podatke, 
// ili u browseru upiši localhost:3000

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

db.connect(function(err){
if(!err) {
    console.log("Database is connected");    
} else {
    console.log("Error connecting database");    
}
});

// Express način fetchanja
app.get("/", function(req,res){
	var i = db.query('SELECT * from chat', function(err, rows, fields) {
	// db.end();  // ako je konekcija end() ne mogu više puta kliknuti GET
	if (!err) {
		console.log(rows[0].name); // rezultat u CLI, prvi red polje 'name'
	    res.send([rows]);  // prikaži u browseru sa Postman (JSON format)
	} else
		console.log('Error while performing Query.');
	});
});

app.listen(3000, function () {
	console.log('Node server is connected');
});
