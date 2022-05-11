import React from "react";
import Navbar from "../../components/Navbar";

import {
  Container,
  Background,
  Logo,
  StyledImage,
  Text,
  RewardText,
} from "./styled";

export default function buyTicket() {
  return (
    <Container>
      <Navbar />
      <Background>
        <Logo>
          <StyledImage src="/gooseluck.svg" />
        </Logo>
        <RewardText>
          <Text>368.59 ETH</Text>
        </RewardText>
      </Background>
      Buy Ticket
    </Container>
  );
}
