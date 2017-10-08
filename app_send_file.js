// probni server sa slanjem fajla ili stranice u browser URL: localhost:3000
// vidi: https://goo.gl/Rq6Gky
var express = require('express');
var app = express();

app.get('/addname', function (req, res) { // web adresa localhost:3000/addname
// response send šalje fajl, sliku ili stranicu nakon unosa url-a u browser (requesta)
	res.sendFile(__dirname + '/index.html');  // u browser unesi localhost:3000
});   // možemo unijeti ime slike umjesto html dokumenta, npr winter.jpg

app.listen(3000, function () {  
	console.log('Node server uključen');
});
