import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-image: url("/img/background.png");
  background-size: cover;
  background-position: center;
  .style {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: red;
  }
`;

export const Info = styled.div`
  width: 70%;
  h1 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--default);
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: var(--tertiary);
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #488aec;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--neutral);
  box-shadow: 0 4px 6px -1px #488aec31, 0 2px 4px -1px #488aec17;
  transition: all 0.6s ease;
  :hover {
    box-shadow: 0 10px 15px -3px #488aec4f, 0 4px 6px -2px #488aec17;
  }
  :active {
    opacity: 0.85;
    box-shadow: none;
  }
`;

export const FooterModal = styled.div`
  display: flex;
  justify-content: end;
  border-top: 1px solid var(--default-inverse);
  padding-top: 12px;
  gap: 12px;
`;
