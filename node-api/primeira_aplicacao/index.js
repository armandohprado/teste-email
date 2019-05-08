const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require("sequelize");


//config
	// template engine
	app.engine("handlebars", handlebars({defaultLaout: 'main'}))
	app.set('view engine', 'handlebars')
	// conexao com BD Mysql 

	const sequelize = new Sequelize("sistemadecadastro", "root","root", {
		host:"localhost",
		dialect:"mysql"
	})
	//rotas

	// app.get("/", (req,res) => {
	// 	res.sendFile(`${__dirname}/index.html`)
	// });

	app.get("/cad", (req,res) => {
		res.render(`${__dirname}/views/layouts/formularios`)
	});

app.listen("8081", () => {
	console.log("server rodando na porta 8081");
});