import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  border: none;
  background-color: #488aec;
  padding: 6px 12px;
  color: var(--neutral);
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.6s ease;
  :hover {
    background-color: #3f79cf;
  }
  :active {
    transform: scale(0.97);
  }
  ${(props) =>
    props.customGoOut &&
    css`
      background-color: #e21212;
      :hover {
        background-color: #c61010;
      }
      :active {
        transform: scale(0.97);
      }
    `}

  ${(props) =>
    props.customNextQuestion &&
    css`
      background-color: #faa300;
      :hover {
        background-color: #db8f00;
      }
      :active {
        transform: scale(0.97);
      }
    `}
    ${(props) =>
    props.disabled &&
    css`
      background-color: #d3d3d3;
      cursor: not-allowed;
      :hover {
        background-color: #d3d3d3; 
      }
    `}
`;
