import React, { useCallback, useEffect, useState } from "react";
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
      num: ["896", "156", "859"],
    },
    {
      round: "49",
      num: ["896", "156", "859"],
    },
    {
      round: "50",
      num: ["896", "156", "859"],
    },
    {
      round: "51",
      num: ["896", "156", "859"],
    },
    {
      round: "52",
      num: ["896", "156", "859"],
    },
    {
      round: "53",
      num: ["896", "156", "859"],
    },
    {
      round: "54",
      num: ["896", "156", "859"],
    },
    {
      round: "55",
      num: ["896", "156", "859"],
    },
  ];

  const check = true;
  return (
    <Container>
      <Navbar myWallet={myWallet} />
      <GreenBackground>
        <TitleContainer>
          <BigText>MY TICKETS</BigText>
          <StyledImage src="/nest.png" />
        </TitleContainer>
        <CardContainer>
          {ticketsArray
            .slice(0, -1)
            .reverse()
            .map((rounds, key) =>
              rounds.num.map((number, key) => (
                <Card round={rounds.round} num={number} />
              ))
            )}
        </CardContainer>
      </GreenBackground>
    </Container>
  );
}

// detail.num.map((ticket, i) => (
//   <Card round={detail.round} num={ticket} />
// ));
