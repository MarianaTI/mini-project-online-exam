import React from "react";
import { ButtonStyled } from "./index.style";

const ButtonComponent = ({
  onClick,
  text,
  customGoOut,
  customNextQuestion,
  disabled,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      customGoOut={customGoOut}
      customNextQuestion={customNextQuestion}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default ButtonComponent;
