import React, { useEffect, useState } from "react";
import { LinearProgress, Modal } from "@mui/material";
import {
  ModalContent,
  ModalHead,
  ModalFooter,
  Time,
  Content,
  QuestionsContainer,
  Answers,
  AnswersContainer,
} from "./index.style";
import QuestionComponent from "../Question";

const ExamComponent = ({
  open,
  onClose,
  children,
  time,
  question,
  answerA,
  answerB,
  answerC,
  answerD,
}) => {
  const [progress, setProgress] = useState(0);

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      onClose(event, reason);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <ModalHead>
          <h1>Examen de matemáticas</h1>
        </ModalHead>
        <Content>
          <div>
            <LinearProgress variant="determinate" value={progress} />
            <Time>
              <span>Tiempo: {time}</span>
            </Time>
          </div>
          <QuestionsContainer>
            <span className="question">{question}</span>
            <QuestionComponent answers={answerA} correctDesign/>
            <QuestionComponent answers={answerB} incorrectDesign/>
            <QuestionComponent answers={answerC} />
            <QuestionComponent answers={answerD} />
          </QuestionsContainer>
        </Content>
        <ModalFooter>{children}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExamComponent;
