import { Container, Content } from "@/styles/Finish.style";
import React from "react";

export default function FinishExam({ score }) {
  let message;

  switch (true) {
    case score >= 8:
      message = "Felicitaciones! Conseguiste " + score + " aciertos.";
      break;
    case score >= 5:
      message = "Que bien. Conseguiste " + score + " aciertos.";
      break;
    case score >= 1:
      message = "¡Hay que estudiar! Conseguiste " + score + " aciertos.";
      break;
    default:
      message = "Lo siento. Conseguiste " + score + " aciertos.";
      break;
  }

  return (
    <Container>
      <h1>¡Has finalizado tu examen!</h1>
      <span>{message}</span>
    </Container>
  );
}
