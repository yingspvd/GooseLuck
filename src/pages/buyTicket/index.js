import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
import React, { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

import {
  Container,
  GreenBackground,
  Logo,
  StyledImage,
  RewardText,
  WhiteBackground,
  BrownBackground,
  TimeContainer,
  DateContainer,
  TimerDays,
  TimerHours,
  TimerMinutes,
  TimerSeconds,
  Separate,
  InfoBlack,
  InfoYellow,
  InfoWhite,
  InfoBrown,
  InputContainer,
  InputNumber,
  StyledButton,
} from "./styled";

export default function BuyTicket() {
  const router = useRouter();
  const lotteryFee = 1;
  const account = useAccount();
  const Lottery = useLottery();
  const [myWallet, setMyWallet] = useState(0);
  const [totalReward, setTotalReward] = useState(0);
  const [ticketNumber, setTicketNumber] = useState(0);
  const [round, setRound] = useState(0);
  const [dateNow, setDateNow] = useState("");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [future, setFuture] = useState();
  const [difference, setDifference] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    getTotalReward();
    getMyWallet();
    getDateNow();
    getRound();
  }, [getTotalReward, getMyWallet, getDateNow, getRound]);

  const getMyWallet = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyWallet(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, [account]);

  const getTotalReward = useCallback(async () => {
    const _reward = await Lottery.methods.getTotalReward().call();
    setTotalReward(Web3.utils.fromWei(_reward, "ether"));
  }, [Lottery.methods]);

  const getRound = useCallback(async () => {
    const round = await Lottery.methods.getRound().call();
    const roundInt = parseInt(round);
    setRound(roundInt + 1);
  }, [Lottery.methods]);

  const updateDate = useCallback(
    async (date) => {
      await Lottery.methods.updateDate(date).send({ from: account });
    },
    [Lottery.methods, account]
  );

  const getDateNow = useCallback(async () => {
    const _date = await Lottery.methods.getDateNow().call();
    if (_date.length == 0) {
      const _dateNow = new Date();
      const addMinutes = new Date(_dateNow.getTime() + 5 * 60000);
      const dateArray = addMinutes.toString().split(" ");
      // _dateNow.setDate(_dateNow.getDate() + 15);
      updateDate(_dateNow.toString());
      setFuture(addMinutes);
      setDateNow(dateArray);
    } else {
      const dateObj = new Date(_date);
      const addMinutes = new Date(dateObj.getTime() + 4 * 60000);
      setFuture(addMinutes);
      const dateArray = addMinutes.toString().split(" ");
      setDateNow(dateArray);
    }
  }, [Lottery.methods, updateDate]);

  const handleBuyTicket = async () => {
    if (ticketNumber >= 100 && ticketNumber <= 999) {
      const _fee = Web3.utils.toWei(lotteryFee.toString(), "ether");
      await Lottery.methods
        .buyNewLottery(_fee, ticketNumber, account)
        .send({ from: account, value: _fee });

      setTicketNumber("");
      getTotalReward();
      getMyWallet();
    } else {
      alert("Number should have only 3 digits");
    }
  };

  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    setDifference(+new Date(future) - +new Date());

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      if (timeLeft.days < 10) {
        setDays("0" + timeLeft.days);
      } else {
        setDays(timeLeft.days);
      }
      if (timeLeft.hours < 10) {
        setHours("0" + timeLeft.hours);
      } else {
        setHours(timeLeft.hours);
      }
      if (timeLeft.minutes < 10) {
        setMinutes("0" + timeLeft.minutes);
      } else {
        setMinutes(timeLeft.minutes);
      }
      if (timeLeft.seconds < 10) {
        setSeconds("0" + timeLeft.seconds);
      } else {
        setSeconds(timeLeft.seconds);
      }
    }

    if (difference < 0) {
      setDays("00");
      setHours("00");
      setMinutes("00");
      setSeconds("00");
    }
  };

  return (
    <Container>
      <Navbar myWallet={myWallet} />
      <GreenBackground>
        <Logo>
          <StyledImage src="/gooseluck.svg" />
        </Logo>
        <RewardText>{totalReward} ETH</RewardText>
        <InfoYellow>IN PRIZE!</InfoYellow>
      </GreenBackground>
      <WhiteBackground>
        <TimeContainer>
          <InfoBrown style={{ marginRight: 60 }}>Next Draw</InfoBrown>
          <InfoBrown style={{ fontSize: 16 }}>
            Round {round} | Draw: {dateNow[0]} {dateNow[1]} {dateNow[2]},{" "}
            {dateNow[3]}, {dateNow[4]}
          </InfoBrown>
        </TimeContainer>
        <TimeContainer>
          <DateContainer>
            <TimerDays>{days}</TimerDays>
            <InfoBlack>Days</InfoBlack>
          </DateContainer>
          <Separate />
          <DateContainer>
            <TimerHours>{hours}</TimerHours>
            <InfoBlack>Hours</InfoBlack>
          </DateContainer>
          <Separate />
          <DateContainer>
            <TimerMinutes>{minutes}</TimerMinutes>
            <InfoBlack>Minutes</InfoBlack>
          </DateContainer>
          <Separate />
          <DateContainer>
            <TimerSeconds>{seconds}</TimerSeconds>
            <InfoBlack>Seconds</InfoBlack>
          </DateContainer>
        </TimeContainer>
      </WhiteBackground>
      <BrownBackground>
        {difference > 0 ? (
          <>
            <InfoWhite>Get your tickets now!</InfoWhite>
            <InputContainer>
              <InputNumber
                placeholder="ENTER 3 DIGIT NUMBER"
                type="number"
                maxLength="3"
                onChange={(e) => setTicketNumber(e.target.value)}
                // pattern="\d{4}"
                // pattern="[0-9]*"
              />
              <StyledButton onClick={() => handleBuyTicket()}>
                Buy Ticket
              </StyledButton>
            </InputContainer>
          </>
        ) : (
          <StyledButton onClick={() => router.push("/finishedRounds")}>
            Lottery Result
          </StyledButton>
        )}
      </BrownBackground>
    </Container>
  );
}
