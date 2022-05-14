/*******************************************************************************
 * Navbar component - navigation bar to different pages
 ******************************************************************************/

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

export default function Navbar({ ...props }) {
  const router = useRouter()

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
          {props.admin == "admin" ?
          <StyledLink onClick={() => router.push('/admin')}>Admin</StyledLink> : null  
          } 
        </MenuItem>
      </Menu>
      <ItemContainer>
        <StyledMetamask src="/MetaMask.png" />
        <TextContainer>
          <Text>{props.myWallet} ETH</Text>
        </TextContainer>
      </ItemContainer>
    </StyledNav>
  );
}
