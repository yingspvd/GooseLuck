import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
import Web3 from "web3";
import React, { useCallback, useEffect, useState } from "react";
import {
  CardContainer,
  LotteryCard,
  BoldText,
  Number,
  Item,
  Text,
  StyleButton,
  Announce,
} from "./styled";

export default function Card({ ...props }) {
  const account = useAccount();
  const Lottery = useLottery();

  const [myStatus, setMyStatus] = useState();

  const checkResult = useCallback(
    async (round, num) => {
      console.log("round ", round);
      console.log("num ", num);
      const status = await Lottery.methods.checkResult(num, round - 1).call();
      if (status == true) {
        setMyStatus(true);
      } else if (status == false) {
        setMyStatus(false);
      } else {
        alert(status);
      }
    },
    [Lottery.methods]
  );

  const getMyStatus = (num) => {
    if (num == 859) {
      setMyStatus(true);
    } else {
      setMyStatus(false);
    }

    console.log("status", myStatus);
  };

  const checkNum = (round, num) => {
    console.log("round", round);
    console.log("num", num);
    getMyStatus(num);
  };

  return (
    <CardContainer>
      {myStatus == false ? (
        <LotteryCard style={{ background: "#8C4F1E", opacity: "0.5" }}>
          <Item>
            <BoldText>Round {props.round}</BoldText>
            <Text style={{ marginTop: "8px" }}>{props.date}</Text>
          </Item>
          <Item>
            <Number>{props.num}</Number>
          </Item>
          <Item>
            <Announce style={{ background: "#CDAD9E" }}>Loss</Announce>
          </Item>
        </LotteryCard>
      ) : myStatus == true ? (
        <LotteryCard style={{ background: "#8C4F1E", opacity: "0.5" }}>
          <Item>
            <BoldText>Round {props.round}</BoldText>
            <Text style={{ marginTop: "8px" }}>{props.date}</Text>
          </Item>
          <Item>
            <Number>{props.num}</Number>
          </Item>
          <Item>
            <Announce>Congratulation!!!</Announce>
          </Item>
        </LotteryCard>
      ) : (
        <LotteryCard>
          <Item>
            <BoldText>Round {props.round}</BoldText>
            <Text style={{ marginTop: "8px" }}>{props.date}</Text>
          </Item>
          <Item>
            <Number>{props.num}</Number>
          </Item>
          <Item>
            <StyleButton onClick={() => checkResult(props.round, props.num)}>
              Check
            </StyleButton>
          </Item>
        </LotteryCard>
      )}
    </CardContainer>
  );
}
