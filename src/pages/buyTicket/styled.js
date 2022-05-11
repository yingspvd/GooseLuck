import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const Background = styled.div`
  width: 100%;
  height: 55%;
  background: #074635;
  overflow: hidden;
`;

export const Logo = styled.div`
  width: 100%;
  position: relative;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 120px;
`;

export const RewardText = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  color: #ffffff;
  font-size: 90px;
  letter-spacing: 20px;
`;
