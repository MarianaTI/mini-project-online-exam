import React, { useEffect, useState } from "react";
import { LinearProgress, Modal } from "@mui/material";
import {
  ModalContent,
  ModalHead,
  ModalFooter,
  Time,
  Content,
  QuestionsContainer,
} from "./index.style";
import QuestionComponent from "../Question";

const ExamComponent = ({
  open,
  onClose,
  children,
  question,
  answerA,
  answerB,
  answerC,
  answerD,
  correctAnswer,
  onNextQuestion,
  onFinishExam,
}) => {
  const [progress, setProgress] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0); // Estado para contar respuestas correctas
  const [timeLeft, setTimeLeft] = useState(15);
  

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      onClose(event, reason);
    }
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (!answered) { // Si no se ha respondido aún
      setAnswer(selectedAnswer);
      setAnswered(true); // Marcar como respondido

      // Verificar si la respuesta seleccionada es correcta
      if (selectedAnswer === correctAnswer) {
        setCorrectCount((prevCount) => prevCount + 1); // Incrementar el contador de respuestas correctas
      }
    }
  };

  const formatTime = (time) =>{
    return `${time} segundos`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {

          ///! si no cumple en responder se ejecuta esto fragmento
          clearInterval(timer);
          setAnswered(true);
          onNextQuestion();
          return 0;
        }
        return prevTimeLeft - 1;
      });

      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 100 / 15; // 15 segundos
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000); // Avanzar cada segundo (1000 milisegundos)

    return () => clearInterval(timer);
  }, [answered, onNextQuestion]);

  // Resetear respuesta y marcado de respuesta al cambiar de pregunta
  useEffect(() => {
    setAnswer(null);
    setAnswered(false);
    setProgress(0);
    setTimeLeft(15);
  }, [question]);

  useEffect(() => {
    // Imprimir el número de respuestas correctas al cerrar el examen
    if (!open && correctCount > 0) {
      console.log(`Respuestas correctas: ${correctCount}`);
      onFinishExam(correctCount);
    }
  }, [open, correctCount, onFinishExam]);

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
              <span>Tiempo: {formatTime(timeLeft)}</span>
            </Time>
          </div>
          <QuestionsContainer>
            <span className="question">{question}</span>
            <QuestionComponent
              answers={answerA}
              designType={
                answer === "A" && correctAnswer === "A"
                  ? "correct"
                  : answer === "A" && correctAnswer !== "A"
                  ? "incorrect"
                  : answered && correctAnswer === "A"
                  ? "correct"
                  : null
              }
              onClick={() => handleAnswerClick("A")}
            />
            <QuestionComponent
              answers={answerB}
              designType={
                answer === "B" && correctAnswer === "B"
                  ? "correct"
                  : answer === "B" && correctAnswer !== "B"
                  ? "incorrect"
                  : answered && correctAnswer === "B"
                  ? "correct"
                  : null
              }
              onClick={() => handleAnswerClick("B")}
            />
            <QuestionComponent
              answers={answerC}
              designType={
                answer === "C" && correctAnswer === "C"
                  ? "correct"
                  : answer === "C" && correctAnswer !== "C"
                  ? "incorrect"
                  : answered && correctAnswer === "C"
                  ? "correct"
                  : null
              }
              onClick={() => handleAnswerClick("C")}
            />
            <QuestionComponent
              answers={answerD}
              designType={
                answer === "D" && correctAnswer === "D"
                  ? "correct"
                  : answer === "D" && correctAnswer !== "D"
                  ? "incorrect"
                  : answered && correctAnswer === "D"
                  ? "correct"
                  : null
              }
              onClick={() => handleAnswerClick("D")}
            />
          </QuestionsContainer>
        </Content>
        <ModalFooter>{children}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExamComponent;
