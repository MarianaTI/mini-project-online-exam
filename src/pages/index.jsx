import { ButtonStyled, Container, Info } from "@/styles/Home.style";
import React from "react";

export default function Home() {  
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
        <ButtonStyled>Comenzar ahora</ButtonStyled>
      </Info>
    </Container>
  );
}
