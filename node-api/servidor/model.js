const Sequelize = require("sequelize");

const sequelize = new Sequelize("sistemadecadastro", "root","root", {
	host:"localhost",
	dialect:"mysql"
})


const Postagem = sequelize.define("postagens", {
	titulo: {
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}
});
const Cliente = sequelize.define("clientes", {
	nome: {
		type: Sequelize.STRING
	},
	sobrenome: {
		type: Sequelize.STRING
	},
	idade: {
		type: Sequelize.INTEGER
	},
	email: {
		type: Sequelize.STRING
	}
});

Postagem.create({
	titulo: "teste de titulo",
	conteudo: "teste de conteudo"
})
Cliente.create({
	nome: "teste de nome",
	sobrenome: "teste de sobrenome",
	idade: 30,
	email: "fulano@gmail.com",
})

Cliente.sync({force:true})
Postagem.sync({force:true})