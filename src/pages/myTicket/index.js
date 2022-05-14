import React, {useCallback, useEffect, useState} from "react";
import useAccount from "@hooks/useAccount";
import Web3 from "web3";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import {
  Container,
  GreenBackground,
  TitleContainer,
  CardContainer,
  BigText,
  StyledImage,
} from "./styled";

export default function MyTicket() {
  const account = useAccount();
  const [myWallet, setMyWallet] = useState(0);
  const round = "49";
  const date = "Draw: May 15, 2022, 7:00 AM";
  const num = "896";

  useEffect(() => {
    getMyWallet();
  }, [getMyWallet]);

  const getMyWallet = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyWallet(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, [account]);

  const ticketsArray = [
    {
      round: "48",
      date: "Draw: May 15, 2022, 7:00 AM",
      num: "896",
      status: "win",
    },
    {
      round: "49",
      date: "Draw: May 15, 2022, 7:00 AM",
      num: "896",
      status: "lose",
    },
    {
      round: "50",
      date: "Draw: May 15, 2022, 7:00 AM",
      num: "896",
      status: "progress",
    },
    {
      round: "47",
      date: "Draw: May 15, 2022, 7:00 AM",
      num: "896",
      status: "lose",
    },
    {
      round: "46",
      date: "Draw: May 15, 2022, 7:00 AM",
      num: "896",
      status: "win",
    },
    {
      round: "50",
      date: "Draw: May 15, 2022, 7:00 AM",
      num: "896",
      status: "progress",
    },
    {
      round: "50",
      date: "Draw: May 15, 2022, 7:00 AM",
      num: "896",
      status: "progress",
    },
    {
      round: "50",
      date: "Draw: May 15, 2022, 7:00 AM",
      num: "896",
      status: "progress",
    },
  ];
  return (
    <Container>
      <Navbar myWallet={myWallet} />
      <GreenBackground>
        <TitleContainer>
          <BigText>MY TICKETS</BigText>
          <StyledImage src="/nest.png" />
        </TitleContainer>
        <CardContainer>
          {ticketsArray.map((detail,key) => (
            detail.status == "progress" ?
            <Card round={detail.round} date={detail.date} num={detail.num} status={detail.status}/>
            : detail.status == "win" ? 
            <Card round={detail.round} date={detail.date} num={detail.num} status={detail.status}/>
            : <Card round={detail.round} date={detail.date} num={detail.num} status={detail.status}/>
          ))}
          
        </CardContainer>
      </GreenBackground>
    </Container>
  );
}
