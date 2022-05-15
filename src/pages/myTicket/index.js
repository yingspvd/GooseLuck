import React, { useCallback, useEffect, useState } from "react";
import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
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
  const Lottery = useLottery();

  const [myWallet, setMyWallet] = useState(0);
  const [MyTicket, setMyTicket] = useState("");
  const [roundNow, setRoundNow] = useState(0);

  useEffect(() => {
    getMyWallet();
    getMyTicket();
    getRound();
  }, [getMyWallet, getMyTicket, getRound]);

  const getMyWallet = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyWallet(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, [account]);

  const getMyTicket = useCallback(async () => {
    const _reward = await Lottery.methods.getMyLottery(account).call();
    setMyTicket(_reward);
  }, [Lottery.methods, account]);

  const getRound = useCallback(async () => {
    const _round = await Lottery.methods.getRound().call();
    setRoundNow(_round);
  }, [Lottery.methods]);

  return (
    <Container>
      <Navbar myWallet={myWallet} />
      <GreenBackground>
        <TitleContainer>
          <BigText>MY TICKETS</BigText>
          <StyledImage src="/nest.png" />
        </TitleContainer>
        <CardContainer>
          {MyTicket &&
            MyTicket.slice(0)
              .reverse()
              .map((rounds, key) =>
                rounds
                  .slice(0)
                  .reverse()
                  .map((number, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <Card
                      roundNow={roundNow}
                      round={MyTicket.length - key}
                      num={number}
                      index={i}
                      getMyWallet={getMyWallet}
                    />
                  ))
              )}
        </CardContainer>
      </GreenBackground>
    </Container>
  );
}
