import React from "react";
import { ButtonStyled } from "./index.style";

const ButtonComponent = ({ onClick, text, customGoOut }) => {
  return (
    <ButtonStyled onClick={onClick} customGoOut={customGoOut}>
      {text}
    </ButtonStyled>
  );
};

export default ButtonComponent;
