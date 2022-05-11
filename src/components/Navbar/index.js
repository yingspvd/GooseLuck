/*******************************************************************************
 * Navbar component - navigation bar to different pages
 ******************************************************************************/

import React from "react";
import {
  StyledNav,
  Logo,
  StyledImage,
  StyledLink,
  Menu,
  MenuItem,
} from "./styled";

export default function Navbar() {
  return (
    <StyledNav>
      <Logo>
        <StyledImage src="/gooseLuckLogo.svg" />
      </Logo>
      <Menu>
        <MenuItem>
          <StyledLink style={{marginRight: "50px"}}>Buy Tickets</StyledLink>
          <StyledLink style={{marginRight: "50px"}}>Result</StyledLink>
          <StyledLink>My Tickets</StyledLink>
        </MenuItem>
      </Menu>
    </StyledNav>
  );
}
