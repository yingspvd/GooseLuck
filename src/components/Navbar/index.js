/*******************************************************************************
 * Navbar component - navigation bar to different pages
 ******************************************************************************/

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

const wallet = "0.321";

export default function Navbar() {
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
          <Text>{wallet} ETH</Text>
        </TextContainer>
      </ItemContainer>
    </StyledNav>
  );
}
