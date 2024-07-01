import React from "react";
import { Content } from "./index.style";

const QuestionComponent = ({ correctDesign, incorrectDesign, answers }) => {
  return (
    <Content correctDesign={correctDesign} incorrectDesign={incorrectDesign}>
      {answers}
    </Content>
  );
};

export default QuestionComponent;
