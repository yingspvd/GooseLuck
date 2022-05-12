import React from "react";
import Button from "../Button";
import { LotteryCard, BoldText, Item, Text } from "./styled";

export default function Card() {
  const round = "49";
  const date = "Draw: May 15, 2022, 7:00 AM";
  const num = "896";
  return (
    <LotteryCard>
      <Item>
        <BoldText style={{ marginTop: "25px" }}>Round {round}</BoldText>
        <Text style={{ marginTop: "8px" }}>{date}</Text>
        <BoldText
          style={{
            fontSize: 40,
            marginTop: "25px",
            marginBottom: "25px",
            marginLeft: "15px",
            letterSpacing: "15px",
          }}
        >
          {num}
        </BoldText>
        <button
          style={{
            width: "100px",
            height: "35px",
            borderRadius: "10px",
            background: "#eec829",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            letterSpacing: "3px",
          }}
        >
          Check
        </button>
      </Item>
    </LotteryCard>
  );
}
