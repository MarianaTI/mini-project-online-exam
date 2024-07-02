import React from "react";
import {FaCheck, FaTimes} from "react-icons/fa";
import { Content, IconWrapper } from "./index.style";

const QuestionComponent = ({ designType, answers, onClick }) => {
  return (
    <Content designType={designType} onClick={onClick}>
      {answers}
      {designType === "correct" && (
        <IconWrapper>
          <FaCheck color="#05b601" />
        </IconWrapper>
      )}
      {designType === "incorrect" && (
        <IconWrapper>
          <FaTimes color="#ed6b6b" />
        </IconWrapper>
      )}
    </Content>
  );
};

export default QuestionComponent;
