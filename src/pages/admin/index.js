import React from "react";
import Navbar from "../../components/Navbar";
import {
  Container,
  GreenBackground,
  BrownBackground,
  TitleContainer,
  BigText,
  StyledImage,
  RandomBox,
  RandomText,
  StyledButton,
  DetailContainer,
  Detail,
  Text,
  Separate,
} from "./styled";

export default function Admin() {
  const amount = 0.125;
  const num = 103;
  return (
    <Container>
      <Navbar />
      <GreenBackground>
        <TitleContainer>
          <BigText>GOOSELUCK MANAGEMENT</BigText>
          <StyledImage src="/egg.png" />
        </TitleContainer>
        <RandomBox>
          <RandomText>000</RandomText>
        </RandomBox>
        <StyledButton style={{ fontSize: "20px", letterSpacing: "4px" }}>
          RANDOM
        </StyledButton>
      </GreenBackground>
      <BrownBackground>
        <DetailContainer>
          <Detail>
            <Text>Number of Tickets</Text>
            <Text>(already sold)</Text>
            <Text
              style={{ marginTop: "20px", fontSize: "40px", color: "#EEC829" }}
            >
              {num}
            </Text>
          </Detail>
          <Separate />
          <Detail>
            <Text>Total Amount</Text>
            <Text
              style={{ marginTop: "20px", fontSize: "40px", color: "#EEC829" }}
            >
              {amount} ETH
            </Text>
          </Detail>
        </DetailContainer>
      </BrownBackground>
    </Container>
  );
}
