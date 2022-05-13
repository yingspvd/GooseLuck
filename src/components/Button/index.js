import React from "react";
import { StyledButton } from "./styled";

export default function Button({ buyLottery }) {
  return <StyledButton onClick={buyLottery}>Buy Tickets</StyledButton>;
}
