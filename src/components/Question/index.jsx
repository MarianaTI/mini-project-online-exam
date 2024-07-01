import React from "react";
import { Content } from "./index.style";

const QuestionComponent = ({ correctDesign, incorrectDesign }) => {
  return (
    <Content correctDesign={correctDesign} incorrectDesign={incorrectDesign}>
      2
    </Content>
  );
};

export default QuestionComponent;
