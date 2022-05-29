import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
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

  const checkAndUpdateWallet = () => {
    checkResult(props.round, props.num);
  };

  const checkResult = useCallback(
    async (round, num) => {
      const roundCard = round - 1;
      const index = props.index;
      console.log(index);
      if (roundCard < props.roundNow) {
        await Lottery.methods
          .checkResult(account, num, roundCard, index)
          .send({ from: account });
        const status = await Lottery.methods.getStatus().call();
        setMyStatus(status);
      } else {
        alert("This round has not yet been announced");
      }
      props.updateWallet();
    },
    [Lottery.methods, account, props.index, props.roundNow]
  );

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
            <StyleButton onClick={() => checkAndUpdateWallet()}>
              Check
            </StyleButton>
          </Item>
        </LotteryCard>
      )}
    </CardContainer>
  );
}
