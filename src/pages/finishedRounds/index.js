import React from "react";
import Navbar from "../../components/Navbar";
import {
  Container,
  GreenBackground,
  TitleContainer,
  BigText,
  StyledImage,
  Board,
  LatestRound,
  Round,
  Text,
  Circle,
  Drawn,
  RoundContainer,
  WinningContainer,
  WinningBox,
  WinningNum,
  Line,
  PastRoundContainer,
  PastRound,
} from "./styled";

const round = "49";
const date = "May 01, 2022, 7:00 AM";
const latestNum = "485";
const roundArray = [
  {
    round: "48",
    num: "156",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "47",
    num: "856",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "46",
    num: "965",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "45",
    num: "039",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "44",
    num: "027",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "43",
    num: "456",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "42",
    num: "752",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "42",
    num: "752",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "42",
    num: "752",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "42",
    num: "752",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "42",
    num: "752",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "42",
    num: "752",
    date: "Aprill 15, 2022, 7:00 AM",
  },
  {
    round: "42",
    num: "752",
    date: "Aprill 15, 2022, 7:00 AM",
  },
];

export default function finishedRounds() {
  return (
    <Container>
      <Navbar />
      <GreenBackground>
        <TitleContainer>
          <BigText>FINISHED ROUNDS</BigText>
          <StyledImage src="/fried-egg.png" />
        </TitleContainer>
        <Board>
          <LatestRound>
            <RoundContainer>
              <Round>
                <Text style={{ fontSize: "30px" }}>Round</Text>
                <Circle>
                  <Text style={{ fontSize: "30px", fontWeight: "700" }}>
                    {round}
                  </Text>
                </Circle>
              </Round>
              <Drawn>
                <Text style={{ fontSize: "20px", opacity: "0.5" }}>
                  Drawn {date}
                </Text>
              </Drawn>
            </RoundContainer>
            <WinningContainer>
              <Text style={{ fontSize: "35px" }}>Winning Number</Text>
              <WinningBox>
                <WinningNum>{latestNum}</WinningNum>
              </WinningBox>
            </WinningContainer>
            <Line />
            <PastRoundContainer>
              {roundArray.map((detail) => (
                <PastRound key={detail.num}>
                  <Text>Round {detail.round}</Text>
                  <Text>Winning Number</Text>
                  <Text style={{ color: "#39B090" }}>{detail.num}</Text>
                  <Text>{detail.date}</Text>
                </PastRound>
              ))}
            </PastRoundContainer>
          </LatestRound>
        </Board>
      </GreenBackground>
    </Container>
  );
}
