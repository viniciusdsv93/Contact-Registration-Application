CREATE DATABASE bg_contatos;

USE bg_contatos;

CREATE TABLE contatos (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR (30) NOT NULL,
    cpf VARCHAR (11),
    deletado BOOL DEFAULT FALSE 
);

CREATE TABLE telefones (
	id_contato INT NOT NULL,
    telefone VARCHAR (12) NOT NULL,
    FOREIGN KEY (id_contato) REFERENCES contatos (id)
);

CREATE TABLE emails (
	id_contato INT NOT NULL,
    email VARCHAR (50) NOT NULL,
    FOREIGN KEY (id_contato) REFERENCES contatos (id)
);

INSERT INTO contatos (nome, sobrenome, cpf) VALUES ('Jorge', 'Oliveira', '123456789');
INSERT INTO contatos (nome, sobrenome, cpf) VALUES ('Maria', 'de Souza', '741258963');

INSERT INTO telefones (id_contato, telefone) VALUES (2, '44444444');

INSERT INTO emails (id_contato, email) VALUES (1, 'jorge@teste.com');

UPDATE emails SET email='jorge@teste2.com' WHERE id_contato=1;

UPDATE contatos SET deletado=FALSE WHERE id=1;