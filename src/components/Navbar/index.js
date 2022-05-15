/*******************************************************************************
 * Navbar component - navigation bar to different pages
 ******************************************************************************/
import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
import React, { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const account = useAccount();
  const Lottery = useLottery();
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    checkIsAdmin();
  }, [checkIsAdmin]);
  const checkIsAdmin = useCallback(async () => {
    const isAdmin = await Lottery.methods.checkIsAdmin(account).call();
    setAdmin(isAdmin);
    console.log("ADMIN ", isAdmin);
  }, [Lottery.methods, account]);

  return (
    <StyledNav>
      <ItemContainer onClick={() => router.push("/buyLottery")}>
        <StyledImage src="/gooseLuckLogo.svg" />
      </ItemContainer>
      <Menu>
        <MenuItem>
          <StyledLink onClick={() => router.push("/buyLottery")}>
            Buy Lottery
          </StyledLink>
          <StyledLink onClick={() => router.push("/lotteryResults")}>
            Lottery Results
          </StyledLink>
          <StyledLink onClick={() => router.push("/myTicket")}>
            My Tickets
          </StyledLink>
          {isAdmin ? (
            <StyledLink onClick={() => router.push("/admin")}>Admin</StyledLink>
          ) : null}
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
