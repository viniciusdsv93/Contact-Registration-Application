import styled from "styled-components";

export const Grid = styled.div`
	border-radius: 10px;
	box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);
	padding: 16px;
	margin-top: 30px;
	margin-bottom: 60px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	th {
		text-align: start;
	}
`;

export const DeleteButton = styled.button`
	padding: 5px 10px;
	color: #fff;
	font-family: "Courier New", Courier, monospace;
	background-color: #e24b00;
	border-radius: 5px;
	border: none;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

export const UpdateButton = styled.button`
	padding: 5px 10px;
	color: #fff;
	font-family: "Courier New", Courier, monospace;
	background-color: #4be200;
	border-radius: 5px;
	border: none;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

export const ModalAlteracao = styled.div`
	position: absolute;
	top: 50%;
	right: 50%;
	transform: translate(50%, -50%);
	border-radius: 10px;
	box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);
	padding: 16px;
	width: auto;
	background-color: #e9e9e9;
	display: flex;
	flex-direction: column;
	gap: 20px;
	transition: all ease 0.5;
`;

export const InputModal = styled.input`
	border-radius: 5px;
	border: 1px solid black;
	width: 300px;
	padding: 5px 15px;
	font-size: 16px;
`;

export const CancelButton = styled.button`
	padding: 5px 10px;
	color: #fff;
	font-family: "Courier New", Courier, monospace;
	background-color: #fa1b1b;
	border-radius: 5px;
	border: none;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

export const FormModal = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const FormModalSubmit = styled.input`
	padding: 5px 10px;
	color: #fff;
	font-family: "Courier New", Courier, monospace;
	background-color: #70fa1b;
	border-radius: 5px;
	border: none;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;
