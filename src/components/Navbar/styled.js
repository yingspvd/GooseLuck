import styled from "styled-components";

export const StyledNav = styled.div`
  width: 100%;
  height: 50px;
  background: #074635;
  position: fixed;
  top: 0;
  z-index: 100;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 10%;
  position: relative;
  margin-left: 1em;
  margin-top: 5px;
  cursor: pointer;
  display:flex;
`;

export const StyledImage = styled.img`
  width: 150px;
  margin-right: 10px;
`;

export const StyledLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  &: hover {
    color: #EEC829;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.div`
  font-size: 15px;
  letter-spacing: 2px;
`;
export default StyledNav;
