import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const GreenBackground = styled.div`
  width: 100%;
  height: 50%;
  background: #074635;
  overflow: hidden;
`;

export const WhiteBackground = styled.div`
  width: 100%;
  height: 20%;
  background: #ffffff;
  overflow: hidden;
`;

export const BrownBackground = styled.div`
  width: 100%;
  height: 30%;
  background: #8c4f1e;
  flex-direction: column;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100%;
  position: relative;
  margin-top: 50px;
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
  font-size: 70px;
  letter-spacing: 20px;
`;

export const InputBar = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  opacity: 0.7;
  background: #ffffff;
  margin-bottom: 30px;
  border-radius: 10px;
`;

export const InputNumber = styled.div`
  width: 40% !important;
  height: 100% !important;
  color: #4c403f;
  background-color: #ffffff;
  border: none;
  padding-left: 20px;
  margin-left: 1px;
  &::placeholder {
    letter-spacing: 2px;
  }
`;
