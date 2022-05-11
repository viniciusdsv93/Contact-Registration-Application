const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// criar conexão com o banco de dados
const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "",
});

// criar banco de dados MySQL
db.query("CREATE DATABASE bg_contatos;", (err) => {
	// em caso de erro, printar no console
	if (err) {
		console.log(err.message);
	} else {
		// selecionar para uso
		db.query(`USE bg_contatos;`);

		// criar tabela de contatos
		db.query(`CREATE TABLE contatos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(30) NOT NULL,
            sobrenome VARCHAR (30) NOT NULL,
            cpf VARCHAR (11),
			telefone VARCHAR (12) NOT NULL,
			email VARCHAR (50),
            deletado BOOL DEFAULT FALSE);`);
	}
});

// método HTTP get para obter dados dos contatos
app.get("/", (req, res) => {
	db.query(`USE bg_contatos;`);
	db.query("SELECT * FROM contatos WHERE deletado=FALSE", (err, result) => {
		if (err) {
			console.log(err.message);
		} else {
			res.send(result);
			console.log("Dados enviados com sucesso");
		}
	});
});

// método HTTP post para inserir dados de um novo contato
app.post("/create", (req, res) => {
	console.log(req.body);
	const nome = req.body.nome;
	const sobrenome = req.body.sobrenome;
	const cpf = req.body.cpf;
	const telefone = req.body.telefone;
	const email = req.body.email;

	db.query(`USE bg_contatos;`);
	db.query(
		"INSERT INTO contatos (nome, sobrenome, cpf, telefone, email) VALUES(?, ?, ?, ?, ?)",
		[nome, sobrenome, cpf, telefone, email],
		(err, result) => {
			if (err) {
				console.log(err.message);
			} else {
				res.send("Valores inseridos na tabela 'contatos'");
				console.log("Valores inseridos na tabela 'contatos'");
				// if (telefones.length > 0) {
				// 	inserirTelefones(telefones);
				// }

				// if (emails.length > 0) {
				// 	inserirEmails(emails);
				// }
			}
		}
	);
});

// método HTTP put com update para alterar dados de um contato
app.put("/update/:id", (req, res) => {
	console.log(req.body);
	const nome = req.body.nome;
	const sobrenome = req.body.sobrenome;
	const cpf = req.body.cpf;
	const telefone = req.body.telefone;
	const email = req.body.email;
	const id = req.params.id;

	db.query(`USE bg_contatos;`);
	db.query(
		"UPDATE contatos SET nome=?, sobrenome=?, cpf=?, telefone=?, email=? WHERE id=?;",
		[nome, sobrenome, cpf, telefone, email, id],
		(err, result) => {
			if (err) {
				console.log(err.message);
			} else {
				res.send("Valores alterados na tabela 'contatos'");
				console.log("Valores alterados na tabela 'contatos'");
			}
		}
	);
});

// método HTTP put com delete para deletar registro de um contato, mudando o campo "deletado" para TRUE
app.put("/delete/:id", (req, res) => {
	console.log(req.body);
	const id = req.params.id;

	db.query(`USE bg_contatos;`);
	db.query("UPDATE contatos SET deletado=TRUE WHERE id=?;", [id], (err, result) => {
		if (err) {
			console.log(err.message);
		} else {
			res.send("Registro deletado na tabela 'contatos'");
			console.log("Registro deletado na tabela 'contatos'");
		}
	});
});

app.listen(3001, function () {
	console.log("Ouvindo na porta 3001");
});
