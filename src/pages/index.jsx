import GetAllQuizUseCase from "@/application/usecases/quizUseCase/GetAllQuizUseCase";
import ButtonComponent from "@/components/Button";
import ExamComponent from "@/components/Exam";
import ModalComponent from "@/components/Modal";
import QuizRepo from "@/infraestructure/implementation/httpRequest/axios/QuizRepo";
import {
  ButtonStyled,
  Container,
  FooterModal,
  Info,
  NextQuestion,
} from "@/styles/Home.style";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openExam, setOpenExam] = useState(false);
  const [quiz, setQuiz] = useState([]);

  const quizRepo = new QuizRepo();
  const getAllQuizUseCase = new GetAllQuizUseCase(quizRepo);

  const fetchQuiz = async () => {
    try {
      const response = await getAllQuizUseCase.run();
      setQuiz(response.quizzes);
      console.log(response.quizzes);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  const toggleModalExam = () => {
    setOpenExam((prev) => !prev);
  };

  const handleContinue = () => {
    setOpen(false);
    setOpenExam(true);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <Container>
      <Info>
        <div>
          <h1>Examen fácil y sencillo de matemáticas</h1>
          <p>
            Este examen tiene como objetivo evaluar tus conocimientos y
            habilidades en diferentes áreas de las matemáticas. A lo largo de
            las siguientes preguntas, tendrás la oportunidad de demostrar tu
            comprensión y aplicación de conceptos matemáticos esenciales. Este
            examen está diseñado para desafiarte y ayudarte a identificar tus
            puntos fuertes y áreas de mejora.
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
          <span style={{ color: "red", fontSize: "16px" }}>15 segundos</span>{" "}
          para responder cada pregunta <br />
          2. Una vez que seleccionas tu respuesta, no se puede deshacer. <br />
          3. No puedes seleccionar ninguna opción una vez que se acaba el
          tiempo. <br />
          4. No puedes salir del Quiz mientras está corriendo el tiempo. <br />
          5. Obtendrás puntos con base en tus preguntas correctas.
        </p>
        <FooterModal>
          <ButtonComponent customGoOut text="Salir" onClick={toggleModal} />
          <ButtonComponent text="Continuar" onClick={handleContinue} />
        </FooterModal>
      </ModalComponent>
      <ExamComponent open={openExam} onClose={toggleModalExam} time="0:00">
        <NextQuestion>
          <span>1 de 5 preguntas</span>
          <ButtonComponent text="Siguiente pregunta" customNextQuestion onClick={toggleModalExam}/>
        </NextQuestion>
      </ExamComponent>
    </Container>
  );
}
