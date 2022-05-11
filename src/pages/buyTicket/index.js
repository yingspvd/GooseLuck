import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

import {
  Container,
  GreenBackground,
  Logo,
  StyledImage,
  Text,
  RewardText,
  WhiteBackground,
  BrownBackground,
  InputBar,
  InputNumber,
} from "./styled";

export default function buyTicket() {
  return (
    <Container>
      <Navbar />
      <GreenBackground>
        <Logo>
          <StyledImage src="/gooseluck.svg" />
        </Logo>
        <RewardText>
          <Text>368.59 ETH</Text>
        </RewardText>
      </GreenBackground>
      <WhiteBackground></WhiteBackground>
      <BrownBackground>
        <InputBar></InputBar>
        <Button></Button>
      </BrownBackground>
    </Container>
  );
}
