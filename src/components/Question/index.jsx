import React from "react";
import { Content } from "./index.style";

const QuestionComponent = ({ designType, answers, onClick }) => {
  return (
    <Content designType={designType} onClick={onClick}>
      {answers}
    </Content>
  );
};

export default QuestionComponent;
