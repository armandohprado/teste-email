const http = require('http');

http.createServer( function(req,res) {
	res.end("oaksdpoask");
}).listen("8091");

console.log("o servido esta rodando na porta 8091");