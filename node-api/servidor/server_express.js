const express = require("express");
const app = express();


app.get("/", (req,res) => {
	res.sendFile(`${__dirname}/index.html`)
});

app.get("/pessoa/:nome/:idade/:cor", (req,res) => {
	res.send(`<h2>Ola ${req.params.nome}!<br>
		você tem ${req.params.idade}<br>
		e sua cor preferida é ${req.params.cor}</h2>`)
});

app.listen("8081", () => {
	console.log("server rodando na porta 8081");
});