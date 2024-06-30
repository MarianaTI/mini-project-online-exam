import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Content = styled.div`
  cursor: pointer;
  border: 1px solid #b8d1f7;
  border-radius: 10px;
  padding: 8px 16px;
  background-color: #f1f6fd;
  ${(props) =>
    props.correctDesign &&
    css`
      border: 1px solid #05b601;
      background-color: #e0f9df;
    `}
  ${(props) =>
    props.incorrectDesign &&
    css`
      border: 1px solid #ed6b6b;
      background-color: #fdecec;
    `}
`;
