import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Content = styled.button`
  cursor: pointer;
  border: 1px solid #b8d1f7;
  border-radius: 10px;
  padding: 8px 16px;
  background-color: #f1f6fd;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: start;

  ${(props) =>
    props.designType === "correct" &&
    css`
      border: 1px solid #05b601;
      background-color: #e0f9df;
    `}

  ${(props) =>
    props.designType === "incorrect" &&
    css`
      border: 1px solid #ed6b6b;
      background-color: #fdecec;
    `}
`;
