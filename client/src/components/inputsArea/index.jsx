import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";

const InputsArea = () => {
	const [dadosPost, setDadosPost] = useState({
		nome: "",
		sobrenome: "",
		cpf: "",
		telefone: "",
		email: "",
	});

	const inserirNovoContato = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/create", {
				nome: dadosPost.nome,
				sobrenome: dadosPost.sobrenome,
				cpf: dadosPost.cpf,
				telefone: dadosPost.telefone,
				email: dadosPost.email,
			})
			.then(() => {
				alert("Dados inseridos com sucesso no banco de dados");
				setDadosPost({
					nome: "",
					sobrenome: "",
					cpf: "",
					telefone: "",
					email: "",
				});
			})
			.catch((err) => {
				if (err) {
					console.log(err);
					alert("Não foi possível inserir os dados. Por favor, tente novamente.");
				}
			});
	};

	return (
		<S.InputsField>
			<h4>Por favor, insira aqui os dados do contato a ser cadastrado:</h4>

			<S.Form action='#' onSubmit={(e) => inserirNovoContato(e)}>
				<S.Input
					value={dadosPost.nome}
					onChange={(e) => setDadosPost({ ...dadosPost, nome: e.target.value })}
					placeholder='Digite o nome...'
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<S.Input
					value={dadosPost.sobrenome}
					onChange={(e) => setDadosPost({ ...dadosPost, sobrenome: e.target.value })}
					placeholder='Digite o sobrenome...'
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<S.Input
					value={dadosPost.cpf}
					onChange={(e) => setDadosPost({ ...dadosPost, cpf: e.target.value })}
					placeholder='Digite o cpf...'
					type='text'
					minLength='11'
					maxLength='11'
				/>
				<S.Input
					value={dadosPost.telefone}
					onChange={(e) => setDadosPost({ ...dadosPost, telefone: e.target.value })}
					placeholder='Digite o telefone...'
					type='text'
					minLength='8'
					maxLength='12'
					required
				/>
				<S.Input
					value={dadosPost.email}
					onChange={(e) => setDadosPost({ ...dadosPost, email: e.target.value })}
					placeholder='Digite o email...'
					type='email'
					maxLength='50'
				/>
				<S.FormSubmit type='submit' value='Inserir novo contato' />
			</S.Form>

			{/* <Button onClickHandler={() => inserirNovoContato()} content={"Clique para inserir"} /> */}
		</S.InputsField>
	);
};

export default InputsArea;
