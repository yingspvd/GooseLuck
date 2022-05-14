import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LotteryCard = styled.div`
  background: #eee5de;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoldText = styled.div`
  color: #000000;
  font-size: 20px;
  font-weight: 500;
`;

export const Number = styled.div`
  color: #000000;
  font-size: 40px;
  // margin: 25px 0px 25px 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  letter-spacing: 15px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  color: #f96666;
  font-size: 12px;
  font-weight: 500;
`;

export const StyleButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  background: #eec829;
  border: none;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Announce = styled.div`
  background: #F96666;
  width: 250px;
  height: 50px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  letter-spacing: 2px;
`;
