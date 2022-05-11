import React from "react";
import * as S from "./styled";

const ModalAlteracao = ({ dadosParaAlteracao, setDadosParaAlteracao, alterarDados, setAlterar }) => {
	return (
		<S.ModalAlteracao>
			<h5>Insira os dados que deseja alterar:</h5>
			<S.FormModal action='#' onSubmit={(e) => alterarDados(dadosParaAlteracao.id, e)}>
				<S.InputModal
					value={dadosParaAlteracao.nome}
					onChange={(e) => setDadosParaAlteracao({ ...dadosParaAlteracao, nome: e.target.value })}
					placeholder='Digite o novo nome...'
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<S.InputModal
					value={dadosParaAlteracao.sobrenome}
					onChange={(e) => setDadosParaAlteracao({ ...dadosParaAlteracao, sobrenome: e.target.value })}
					placeholder='Digite o novo sobrenome...'
					type='text'
					minLength='2'
					maxLength='30'
					required
				/>
				<S.InputModal
					value={dadosParaAlteracao.cpf}
					onChange={(e) => setDadosParaAlteracao({ ...dadosParaAlteracao, cpf: e.target.value })}
					placeholder='Digite o novo CPF...'
					type='text'
					minLength='11'
					maxLength='11'
				/>
				<S.InputModal
					value={dadosParaAlteracao.telefone}
					onChange={(e) => setDadosParaAlteracao({ ...dadosParaAlteracao, telefone: e.target.value })}
					placeholder='Digite o novo telefone...'
					type='text'
					minLength='8'
					maxLength='12'
					required
				/>
				<S.InputModal
					value={dadosParaAlteracao.email}
					onChange={(e) => setDadosParaAlteracao({ ...dadosParaAlteracao, email: e.target.value })}
					placeholder='Digite o novo email...'
					type='email'
					maxLength='50'
				/>
				<S.FormModalSubmit type='submit' value='Confirmar alteração' />
				<S.CancelButton onClick={() => setAlterar(false)}>Cancelar alteração</S.CancelButton>
			</S.FormModal>
		</S.ModalAlteracao>
	);
};

export default ModalAlteracao;
