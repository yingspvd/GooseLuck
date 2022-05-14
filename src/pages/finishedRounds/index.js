import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
import React, { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
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

export default function FinishedRounds() {
  const account = useAccount();
  const Lottery = useLottery();
  const [admin, setAdmin] = useState("admin");
  const [myWallet, setMyWallet] = useState(0);
  const [resultHistory, setHisResult] = useState([123, 111]);
  const [dateHistory, setHisDate] = useState(["www", "ww"]);

  const lotteryTemp = [111, 222, 333];
  const dateTemp = ["111", "222", "333"];

  const getHistoryResult = useCallback(async () => {
    const _hisResult = await Lottery.methods.getHistoryResult().call();
    const _hisDate = await Lottery.methods.getHistoryDate().call();

    console.log(_hisResult);
    setHisResult(_hisResult);
    setHisDate(_hisDate);
  }, [Lottery.methods]);

  useEffect(() => {
    getHistoryResult();
    getMyWallet();
  }, [getHistoryResult, getMyWallet]);

  const getMyWallet = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyWallet(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, [account]);

  return (
    <Container>
      <Navbar myWallet={myWallet} admin={admin} />
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
                    {resultHistory.length}
                  </Text>
                </Circle>
              </Round>
              <Drawn>
                <Text style={{ fontSize: "20px", opacity: "0.5" }}>
                  Drawn {dateHistory[dateHistory.length - 1]}
                </Text>
              </Drawn>
            </RoundContainer>
            <WinningContainer>
              <Text style={{ fontSize: "35px" }}>Winning Number</Text>
              <WinningBox>
                <WinningNum>
                  {resultHistory[resultHistory.length - 1]}
                </WinningNum>
              </WinningBox>
            </WinningContainer>
            <Line />
            <PastRoundContainer>
              {resultHistory
                .slice(0, -1)
                .reverse()
                .map((detail, key) => (
                  <PastRound key={detail.key}>
                    <Text>Round {resultHistory.length - key - 1}</Text>
                    <Text>Winning Number</Text>
                    <Text style={{ color: "#39B090" }}>{detail}</Text>
                    <Text>{dateHistory.slice(0, -1).reverse()[key]}</Text>
                  </PastRound>
                ))}
            </PastRoundContainer>
          </LatestRound>
        </Board>
      </GreenBackground>
    </Container>
  );
}
