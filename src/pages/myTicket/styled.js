import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

export const GreenBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #074635;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 40px;
  width: 80%;
  margin-top: 80px;
`;

export const BigText = styled.div`
  color: #ffffff;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 15px;
  margin-right: 30px;
`;

export const StyledImage = styled.img`
  width: 90px;
`;
