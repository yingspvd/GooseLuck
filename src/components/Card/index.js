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
  const round = "49";
  const date = "Draw: May 15, 2022, 7:00 AM";
  const num = "896";
  const [myStatus, setMyStatus] = useState();

  const getMyStatus = useCallback(async (num) => {
    if (num == 859) {
      setMyStatus(true);
    } else {
      setMyStatus(false);
    }

    console.log("status", myStatus);
  });

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
            <StyleButton onClick={() => checkNum(props.round, props.num)}>
              Check
            </StyleButton>
          </Item>
        </LotteryCard>
      )}
    </CardContainer>
  );
}
