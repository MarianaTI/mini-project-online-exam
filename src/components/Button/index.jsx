import React from "react";
import { ButtonStyled } from "./index.style";

const ButtonComponent = ({
  onClick,
  text,
  customGoOut,
  customNextQuestion,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      customGoOut={customGoOut}
      customNextQuestion={customNextQuestion}
    >
      {text}
    </ButtonStyled>
  );
};

export default ButtonComponent;
