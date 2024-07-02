import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-image: url("/img/finish.png");
  background-size: cover;
  background-position: center;
    h1 {
        margin: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;