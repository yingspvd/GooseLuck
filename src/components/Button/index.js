import React from "react";
import { StyledButton } from "./styled";

export default function Button({ buyLottery, children }) {
  return <StyledButton onClick={buyLottery}>{children}</StyledButton>;
}
