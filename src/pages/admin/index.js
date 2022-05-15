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
  const [myWallet, setMyWallet] = useState(0);
  const [totalReward, setTotalReward] = useState(0);
  const [numTicket, setNumTicket] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    getTotalReward();
    getNumTicket();
    getMyWallet();
  }, [getTotalReward, getNumTicket, getMyWallet]);

  const getMyWallet = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyWallet(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, [account]);

  const getTotalReward = useCallback(async () => {
    const _reward = await Lottery.methods.getTotalReward().call();
    setTotalReward(Web3.utils.fromWei(_reward, "ether"));
  }, [Lottery.methods]);

  const getNumTicket = useCallback(async () => {
    const number = await Lottery.methods.getNumTicket().call();
    setNumTicket(number);
  }, [Lottery.methods]);

  const handleRandomNum = async () => {
    const _result = randomNumber(100, 999);
    _result = 111;
    const _date = new Date();
    const dateString = _date.toString();
    const dateArray = _date.toString().split(" ");
    const announceDate =
      dateArray[1] + " " + dateArray[2] + ", " + dateArray[3];

    await Lottery.methods
      .keepResult(_result, announceDate, dateString)
      .send({ from: account });
    setResult(_result);
    getTotalReward();
    getNumTicket();
    getMyWallet();
  };

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <Container>
      <Navbar myWallet={myWallet} />
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
