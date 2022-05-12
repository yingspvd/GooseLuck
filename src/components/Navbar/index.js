/*******************************************************************************
 * Navbar component - navigation bar to different pages
 ******************************************************************************/
import useAccount from "@hooks/useAccount";
import { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import React from "react";
import {
  StyledNav,
  ItemContainer,
  StyledImage,
  StyledLink,
  Menu,
  MenuItem,
  StyledMetamask,
  Text,
  TextContainer,
} from "./styled";

export default function Navbar() {
  const account = useAccount();
  const [myWallet, setMyWallet] = useState(0);

  const getMyWallet = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyWallet(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, account);

  useEffect(() => {
    getMyWallet();
  }, [getMyWallet]);

  return (
    <StyledNav>
      <ItemContainer>
        <StyledImage src="/gooseLuckLogo.svg" />
      </ItemContainer>
      <Menu>
        <MenuItem>
          <StyledLink style={{ marginRight: "50px" }}>Buy Tickets</StyledLink>
          <StyledLink style={{ marginRight: "50px" }}>
            Finished Rounds
          </StyledLink>
          <StyledLink>My Tickets</StyledLink>
        </MenuItem>
      </Menu>
      <ItemContainer>
        <StyledMetamask src="/MetaMask.png" />
        <TextContainer>
          <Text>{myWallet} ETH</Text>
        </TextContainer>
      </ItemContainer>
    </StyledNav>
  );
}
