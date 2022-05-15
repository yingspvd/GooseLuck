import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

export const GreenBackground = styled.div`
  width: 100%;
  height: 45%;
  margin-top: 30px;
  background: #074635;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhiteBackground = styled.div`
  width: 100%;
  height: 25%;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerDays = styled.div`
  font-size: 48px;
  color: #39b090;
`;

export const TimerHours = styled.div`
  font-size: 48px;
  color: #f96666;
`;

export const TimerMinutes = styled.div`
  font-size: 48px;
  color: #66c4f9;
`;

export const TimerSeconds = styled.div`
  font-size: 48px;
  color: #eec829;
`;

export const InfoBlack = styled.div`
  font-size: 13px;
  margin-top: 10px;
`;

export const Separate = styled.div`
  width: 30px;
  border-radius: 50px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  transform: rotate(90deg);
  margin-right: 30px;
  margin-left: 30px;
`;

export const BrownBackground = styled.div`
  width: 100%;
  height: 30%;
  background: #8c4f1e;
  flex-direction: column;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100%;
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 90px;
`;

export const RewardText = styled.div`
  margin-top: 20px;
  color: #ffffff;
  font-size: 60px;
  letter-spacing: 20px;
`;

export const InfoBrown = styled.div`
  color: #cdad9e;
  font-size: 20px;
  letter-spacing: 5px;
`;

export const InfoYellow = styled.div`
  color: #eec829;
  font-size: 24px;
  letter-spacing: 5px;
  margin-top: 20px;
`;

export const InfoWhite = styled.div`
  color: #ffffff;
  font-size: 24px;
  letter-spacing: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
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

export const InputNumber = styled.input`
  color: #4c403f;
  background-color: #CDAD9E;
  width: 250px;
  border: none;
  border-radius: 10px;
  margin-right: 20px;
  text-align: center;
  font-size: 14px;
  &::placeholder {
    letter-spacing: 2px;
    text-align: center;
  }
`;

export const StyledButton = styled.div`
  height: 50px;
  width: 250px;
  background: #eec829;
  border-radius: 10px;
  padding: 0 2.5vw;
  color: #000000;
  font-size: 20 px;
  font-weight: 500;
  letter-spacing: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px #202020;
  white-space: nowrap;
`;