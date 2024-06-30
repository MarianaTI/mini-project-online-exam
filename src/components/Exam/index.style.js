import styled from "@emotion/styled";

export const ModalContent = styled.div`
  position: absolute;
  max-height: auto;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  background-color: var(--neutral);
  box-shadow: 24;
  padding: 8px 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  & h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: var(--default);
  }
  & span {
    color: var(--tertiary);
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    width: 400px;
    padding: 24px;
  }
  @media (max-width: 320px) {
    width: 280px;
    padding: 16px 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 90%;
    overflow-y: auto;
  }
`;

export const ModalHead = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  padding-bottom: 16px;
  .question {
    color: var(--default);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Time = styled.div`
  display: flex;
  justify-content: end;
  padding: 8px 0;
`;

export const ModalFooter = styled.div`
  padding-bottom: 16px;
`;
