/*******************************************************************************
 * Navbar component - navigation bar to different pages
 ******************************************************************************/
import useAccount from "@hooks/useAccount";
import { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import React from "react";
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const account = useAccount();
  const [myWallet, setMyWallet] = useState(0);

  const getMyWallet = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyWallet(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, [account]);

  useEffect(() => {
    getMyWallet();
  }, [getMyWallet]);

  return (
    <StyledNav>
      <ItemContainer onClick={() => router.push('/buyTicket')}>
         <StyledImage src="/gooseLuckLogo.svg" />
      </ItemContainer>
      <Menu>
        <MenuItem>
          <StyledLink onClick={() => router.push('/buyTicket')}>Buy Tickets</StyledLink>
          <StyledLink onClick={() => router.push('/finishedRounds')}>Finished Rounds</StyledLink>
          <StyledLink onClick={() => router.push('/myTicket')}>My Tickets</StyledLink>
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
