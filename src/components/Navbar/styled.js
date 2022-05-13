import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background: #074635;
  position: fixed;
  z-index: 100;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

export const ItemContainer = styled.div`
  position: relative;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
`;

export const StyledImage = styled.img`
  width: 150px;
  margin-right: 10px;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  &: hover {
    color: #eec829;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-evenly;
  font-size: 15px;
  letter-spacing: 2px;
`;

export const StyledMetamask = styled.img`
  cursor: context-menu;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: context-menu;
`;

export const Text = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.5px;
`;

export default StyledNav;
