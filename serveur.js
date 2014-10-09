var http = require('http');
var port = 8000;
var fs = require('fs');
var express = require('express');
var app = express();



http.createServer(function(req, res) {
	//res.writeHead(200, {'Content-type': 'text/plain'});
	//res.end('It works !\n');

	if(req.url == '/'){
		res.writeHead(200, {'Content-type': 'text/html'});
		var fichier = "accueil.html";

		
		fs.readFile(fichier, 'utf8', function (err, data) {
			if (err) throw err;
 			res.write(data);
			console.log(req.url);
			res.end();
		});
		

		//var text = fs.readFileSync(fichier,'utf8');
 		//res.write(text);

		/*
		res.write(
			'<!DOCTYPE html>' + 
			'<html>' +
			'<head>' +
				'<title></title>' +
			'</head>' +
			'<body>' +
				'<h1>Page d\'accueil</h1>' +
			'</body>' +
			'</html>'
		);
		*/
	}
	else if (req.url == '/about'){
		var fichier = "about.html";
		res.writeHead(200, {'Content-type': 'text/html'});
		var fichier = "about.html";
		var text = fs.readFileSync(fichier,'utf8');
 		res.write(text);
		
		console.log(req.url);
		res.end();
	}

	else {
		var fichier = "404.html";
		res.writeHead(404, {'Content-type': 'text/html'});
		var fichier = "404.html";
		var text = fs.readFileSync(fichier,'utf8');
 		res.write(text);
		console.log(req.url);
		res.end();
	}



}).listen(port, '127.0.0.1');
console.log('Serveur marche sur http://localhost:8000/');
