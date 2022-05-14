import React from "react";
import Button from "../Button";
import { CardContainer, LotteryCard, BoldText, Number, Item, Text, StyleButton, Announce } from "./styled";

export default function Card({ ...props }) {
  const round = "49";
  const date = "Draw: May 15, 2022, 7:00 AM";
  const num = "896";
  return (
    <CardContainer>
      {/* <LotteryCard>
        <Item>
          <BoldText>Round {props.round}</BoldText>
          <Text style={{ marginTop: "8px" }}>{props.date}</Text>
        </Item>
        <Item>
          <Number>{props.num}</Number>
        </Item>
        <Item>
        <StyleButton>Check</StyleButton>
        </Item>
      </LotteryCard> */}


      {props.status == "lose" ?
        <LotteryCard style={{background: "#8C4F1E", opacity: "0.5"}}>
          <Item>
            <BoldText>Round {props.round}</BoldText>
            <Text style={{ marginTop: "8px" }}>{props.date}</Text>
          </Item>
          <Item>
            <Number>{props.num}</Number>
          </Item>
          <Item>
            <StyleButton>Check</StyleButton>
          </Item>
          <Item>
            <Announce style={{background: "#CDAD9E"}}>Loss</Announce>
          </Item>
        </LotteryCard>
        : props.status == "win" ?
        <LotteryCard style={{background: "#8C4F1E", opacity: "0.5"}}>
          <Item>
            <BoldText>Round {props.round}</BoldText>
            <Text style={{ marginTop: "8px" }}>{props.date}</Text>
          </Item>
          <Item>
            <Number>{props.num}</Number>
          </Item>
          <Item>
            <StyleButton>Check</StyleButton>
          </Item>
          <Item>
            <Announce>Congratulation!!!</Announce>
          </Item>
        </LotteryCard>
        : 
        <LotteryCard>
          <Item>
            <BoldText>Round {props.round}</BoldText>
            <Text style={{ marginTop: "8px" }}>{props.date}</Text>
          </Item>
          <Item>
            <Number>{props.num}</Number>
          </Item>
          <Item>
          <StyleButton>Check</StyleButton>
          </Item>
        </LotteryCard>
      }

    </CardContainer>
    
  );
}
