import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

export const GreenBackground = styled.div`
  width: 100%;
  height: 65%;
  background: #074635;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BrownBackground = styled.div`
  width: 100%;
  height: 35%;
  background: #8c4f1e;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 15px;
  margin-right: 30px;
`;

export const StyledImage = styled.img`
  width: 90px;
`;

export const RandomBox = styled.div`
  background: #ffffff;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RandomText = styled.div`
  color: #000000;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 30px;
  margin-left: 30px;
`;

export const StyledButton = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background: #f96666;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  box-shadow: 0px 4px 10px #202020;
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Detail = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 5px;
`;

export const Separate = styled.div`
  height: 150px;
  width: 3px;
  background: #ffffff;
  border-radius: 5px;
`;

export const InputNumber = styled.input`
  color: #4c403f;
  background-color: #cdad9e;
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  &::placeholder {
    letter-spacing: 2px;
    text-align: center;
  }
`;
