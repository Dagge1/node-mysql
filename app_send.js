// probni server sa slanjem poruke u browser URL: localhost:3000
// vidi: https://goo.gl/Rq6Gky
var express = require('express');
var app = express();

// get je funkcija za slanje GET zahtjeva putem http requesta u browseru
app.get('/', function (req, res) { // / nije direktorij nego route ime gdje je fajl
// response send šalje poruku ili fajl nakon unosa url-a u browser (requesta)
	res.send('Prva poruka sa node servera');  // u browser unesi localhost:3000
});

app.listen(3000, function () {  // path je localhost ili IP 127.0.0.1
	console.log('Node server uključen');
});

// POJAŠNJENJE: app.get šalje GET zahtjev putem browsera. Callback funkcija
// određuje što napraviti sa zahtjevom, res je odgovor, res.send() je slanje
// konkretnog odgovora da li to bio tekst, JSON, html stranica ili image
// req.body() npr je request body tj traženje body dijela html stranice,
// koji će onda poslati npr u MongoDB bazu u JSON formatu


// GIT povlačenje kopije repozitorija na drugi PC: git clone i url repo adrese
// GIT Upload popravljenih i novih fajlova
// git status, git add ., git commit -m "Now version" , git push (origin master)
// Za povlačenje fajlova: git pull origin master

// node-modules ne treba povlačiti, dovoljno je upisati 'npm install'