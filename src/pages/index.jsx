import GetAllQuizUseCase from "@/application/usecases/quizUseCase/GetAllQuizUseCase";
import ButtonComponent from "@/components/Button";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import ExamComponent from "@/components/Exam";
import ModalComponent from "@/components/Modal";
import QuizRepo from "@/infraestructure/implementation/httpRequest/axios/QuizRepo";
import {
  ButtonStyled,
  Container,
  FooterModal,
  FooterModalFinish,
  Info,
  NextQuestion,
  ResultContainer,
} from "@/styles/Home.style";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [openExam, setOpenExam] = useState(false);
  const [openFinish, setOpenFinish] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState([]);

  const quizRepo = new QuizRepo();
  const getAllQuizUseCase = new GetAllQuizUseCase(quizRepo);

  const fetchQuiz = async () => {
    try {
      setIsLoading(true); // Activar estado de carga
      const response = await getAllQuizUseCase.run();
      const quizzes = response.quizzes;
      const randomSelection = selectRandomQuestion(quizzes, 10);
      setQuiz(quizzes);
      setRandomQuestions(randomSelection);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Desactivar estado de carga
    }
  };

  const selectRandomQuestion = (quizzes, numberOfQuestions) => {
    return quizzes.sort(() => 0.5 - Math.random()).slice(0, numberOfQuestions);
  };

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  const toggleModalExam = () => {
    setOpenExam((prev) => !prev);
  };

  const toggleModalFinish = () => {
    setOpenFinish((prev) => !prev);
  };

  const handleContinue = () => {
    setOpen(false);
    setOpenExam(true);
  };

  const handleContinueFinish = () => {
    setOpen(false);
    setOpenFinish(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setOpenExam(false);
    }
  };

  const resetExam = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    fetchQuiz();
    setOpenExam(true);
  };

  const result = (score) => {
    let message;

    switch (true) {
      case score >= 8:
        message =
          "Felicitaciones! 🎉 Conseguiste " + score + " aciertos de 10.";
        break;
      case score >= 5:
        message = "Que bien 😎 Conseguiste " + score + " aciertos de 10.";
        break;
      case score >= 1:
        message =
          "¡Hay que estudiar! 😅 Conseguiste " + score + " aciertos de 10.";
        break;
      default:
        message = "Lo siento 😞 Conseguiste " + score + " aciertos de 10.";
        break;
    }

    return message;
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <Info>
            <div>
              <h1>Examen fácil y sencillo de matemáticas</h1>
              <p>
                Este examen tiene como objetivo evaluar tus conocimientos y
                habilidades en diferentes áreas de las matemáticas. A lo largo
                de las siguientes preguntas, tendrás la oportunidad de demostrar
                tu comprensión y aplicación de conceptos matemáticos esenciales.
                Este examen está diseñado para desafiarte y ayudarte a
                identificar tus puntos fuertes y áreas de mejora.
              </p>
            </div>
            <ButtonStyled onClick={toggleModal}>Comenzar ahora</ButtonStyled>
          </Info>
          <ModalComponent
            open={open}
            onClose={toggleModal}
            title="Reglas del examen"
          >
            <p>
              1. Solo tendrás{" "}
              <span style={{ color: "red", fontSize: "16px" }}>
                15 segundos
              </span>{" "}
              para responder cada pregunta <br />
              2. Una vez que seleccionas tu respuesta, no se puede deshacer.{" "}
              <br />
              3. No puedes seleccionar ninguna opción una vez que se acaba el
              tiempo. <br />
              4. No puedes salir del Quiz mientras está corriendo el tiempo.{" "}
              <br />
              5. Obtendrás puntos con base en tus preguntas correctas.
            </p>
            <FooterModal>
              <ButtonComponent customGoOut text="Salir" onClick={toggleModal} />
              <ButtonComponent text="Continuar" onClick={handleContinue} />
            </FooterModal>
          </ModalComponent>
          {randomQuestions.length > 0 && (
            <ExamComponent
              open={openExam}
              onClose={toggleModalExam}
              question={randomQuestions[currentQuestionIndex].question}
              answerA={randomQuestions[currentQuestionIndex].answers.A}
              answerB={randomQuestions[currentQuestionIndex].answers.B}
              answerC={randomQuestions[currentQuestionIndex].answers.C}
              answerD={randomQuestions[currentQuestionIndex].answers.D}
              correctAnswer={randomQuestions[currentQuestionIndex].result}
              onNextQuestion={handleNextQuestion}
            >
              <NextQuestion>
                <span>
                  {currentQuestionIndex + 1} de {randomQuestions.length}{" "}
                  preguntas
                </span>
                <ButtonComponent
                  text="Siguiente pregunta"
                  customNextQuestion
                  onClick={handleNextQuestion}
                />
              </NextQuestion>
            </ExamComponent>
          )}
        </>
      )}
      <ModalComponent
        open={openFinish}
        onClose={toggleModalFinish}
        title="¡Has finalizado tu examen!"
      >
        <ResultContainer>{result(score)}</ResultContainer>
        <FooterModalFinish>
          <ButtonComponent
            customGoOut
            text="Salir"
            onClick={toggleModalFinish}
          />
          <ButtonComponent text="Continuar" onClick={handleContinue} />
        </FooterModalFinish>
      </ModalComponent>
    </Container>
  );
}
