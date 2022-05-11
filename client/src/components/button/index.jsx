import React from "react";
import * as S from "./styled";

function Button({ content, onClickHandler }) {
	return <S.Button onClick={onClickHandler}>{content}</S.Button>;
}

export default Button;
