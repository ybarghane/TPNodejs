var port = 8000;
var express = require('express');
var app = express();
var server;
var fichier;

app.get('/', function(req, res) {
	fichier = 'accueil.html';
	res.sendFile(__dirname + '/' + fichier);
});

app.get('/about', function(req, res) {
	fichier = 'about.html';
	res.sendFile(__dirname + '/' + fichier);
	res.send('chaine');
});

app.get('/*', function(req, res) {
	fichier = '404.html';
	res.sendFile(__dirname + '/' + fichier);
});

server = app.listen(port, function() {
	console.log('Ecoute sur le port %d', server.address().port);
});