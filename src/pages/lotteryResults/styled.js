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

export const BigText = styled.div`
  color: #ffffff;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 15px;
  margin-right: 30px;
`;

export const StyledImage = styled.img`
  width: 110px;
`;

export const Board = styled.div`
  width: 80%;
  min-height: 74vh;
  background: #eee5de;
  margin-top: 60px;
`;

export const LatestRound = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RoundContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Round = styled.div`
  display: flex;
  align-items: center;
`;

export const Drawn = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  color: #000000;
  font-size: 20px;
  font-weight: 600;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: #eeb729;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WinningContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WinningBox = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 50px;
  margin-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f96666;
`;
export const WinningNum = styled.div`
  color: #ffffff;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 30px;
  padding-left: 30px;
`;

export const Line = styled.div`
  background: #8c4f1e;
  width: 800px;
  height: 4px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const PastRoundContainer = styled.div`
  width: 100%;
`;
export const PastRound = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
