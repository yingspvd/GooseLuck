import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import {
  Container,
  GreenBackground,
  TitleContainer,
  BigText,
  StyledImage,
} from "./styled";

export default function finishedRounds() {
  return (
    <Container>
      <Navbar />
      <GreenBackground>
        <TitleContainer>
          <BigText>MY TICKETS</BigText>
          <StyledImage src="/nest.png" />
        </TitleContainer>
        <Card></Card>
      </GreenBackground>
    </Container>
  );
}
