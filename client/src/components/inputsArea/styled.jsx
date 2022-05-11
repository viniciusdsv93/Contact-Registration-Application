import styled from "styled-components";

export const InputsField = styled.div`
	border-radius: 10px;
	box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const Input = styled.input`
	border-radius: 5px;
	border: 1px solid black;
	width: 300px;
	padding: 5px 15px;
	font-size: 16px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const FormSubmit = styled.input`
	padding: 15px;
	width: 300px;
	color: #fff;
	font-family: "Courier New", Courier, monospace;
	background-color: #005ee2;
	border-radius: 10px;
	border: none;
	font-weight: bold;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;
