import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: #074635;
  z-index: 100;
  overflow: hidden;
`;

export const Logo = styled.div`
  width: 10%;
  position: relative;
  margin-left: 1em;
  margin-top: 5px;
  cursor: pointer;
  display: flex;
`;

export const StyledImage = styled.img`
  width: 150px;
  margin-right: 10px;
`;

export const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &: hover {
    color: #eec829;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.div`
  font-size: 15px;
  letter-spacing: 2px;
`;

export default StyledNav;
