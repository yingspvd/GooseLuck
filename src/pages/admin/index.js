import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
import { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
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
  const account = useAccount();
  const Lottery = useLottery();

  const [totalReward, setTotalReward] = useState(0);
  const [numTicket, setNumTicket] = useState(0);
  const [result, setResult] = useState(0);

  const getTotalReward = useCallback(async () => {
    const _reward = await Lottery.methods.getReward().call();
    setTotalReward(Web3.utils.fromWei(_reward, "ether"));
  }, [Lottery.methods]);

  const getNumTicket = useCallback(async () => {
    const number = await Lottery.methods.getNumTicket().call();
    setNumTicket(number);
  }, [Lottery.methods]);

  const handleRandomNum = async () => {
    const _result = randomNumber(100, 999);
    const _date = new Date();
    const dateString = _date.toString().split(" ");
    const announceDate =
      dateString[1] + " " + dateString[2] + ", " + dateString[3];

    await Lottery.methods
      .keepResult(_result, announceDate, dateString)
      .send({ from: account });
    setResult(_result);
  };

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    getTotalReward();
    getNumTicket();
  }, [getTotalReward, getNumTicket]);
  return (
    <Container>
      <Navbar />
      <GreenBackground>
        <TitleContainer>
          <BigText>GOOSELUCK MANAGEMENT</BigText>
          <StyledImage src="/egg.png" />
        </TitleContainer>
        <RandomBox>
          <RandomText>{result}</RandomText>
        </RandomBox>
        <StyledButton
          onClick={handleRandomNum}
          style={{ fontSize: "20px", letterSpacing: "4px" }}
        >
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
              {numTicket}
            </Text>
          </Detail>
          <Separate />
          <Detail>
            <Text>Total Amount</Text>
            <Text
              style={{ marginTop: "20px", fontSize: "40px", color: "#EEC829" }}
            >
              {totalReward} ETH
            </Text>
          </Detail>
        </DetailContainer>
      </BrownBackground>
    </Container>
  );
}
