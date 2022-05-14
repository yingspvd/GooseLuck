import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
import React, { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

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
} from "./styled";

export default function BuyTicket() {
  const lotteryFee = 0.001;
  const account = useAccount();
  const Lottery = useLottery();
  const [myWallet, setMyWallet] = useState(0);
  const [totalReward, setTotalReward] = useState(0);
  const [ticketNumber, setTicketNumber] = useState(0);
  const [dateNow, setDateNow] = useState("");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [future, setFuture] = useState();
  // const [futureDate, setFutureDate] = useState();
  // const [futureDay, setFutureDay] = useState();
  // const [futureMonth, setFutureMonth] = useState();
  // const [futureYear, setFutureYear] = useState();
  // const [futureHours, setFutureHours] = useState();
  // const [futureMinutes, setFutureMinutes] = useState();
  const [difference, setDifference] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const DateNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  }, [getTotalReward, getMyWallet, getDateNow]);

  const getMyWallet = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyWallet(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, [account]);

  const getTotalReward = useCallback(async () => {
    const _reward = await Lottery.methods.getTotalReward().call();
    setTotalReward(Web3.utils.fromWei(_reward, "ether"));
  }, [Lottery.methods]);

  const getDateNow = useCallback(async () => {
    const _date = await Lottery.methods.getDateNow().call();
    if (_date.length == 0) {
      const _dateNow = new Date();
      console.log(_dateNow);
      console.log(typeof _dateNow);
      const addMinutes = new Date(_dateNow.getTime() + 1 * 60000);
      // _dateNow.setDate(_dateNow.getDate() + 15);
      setFuture(addMinutes);
      const dateArray = addMinutes.toString().split(" ");
      setDateNow(dateArray);
      // console.log("0: ", dateArray);
    } else {
      const dateObj = new Date(_date);
      const addMinutes = new Date(dateObj.getTime() + 1 * 60000);
      setFuture(addMinutes);
      const dateArray = addMinutes.toString().split(" ");
      setDateNow(dateArray);
      console.log("db: ", _date);
    }
  }, [Lottery.methods]);

  // const handleBuyNewTicket = async () => {
  //   if (ticketNumber >= 100 && ticketNumber <= 999) {
  //     const _fee = Web3.utils.toWei(lotteryFee.toString(), "ether");
  //     const date = dateNow[1] + " " + dateNow[2] + ", " + dateNow[3];
  //     console.log("DATE", date);
  //     const re = await Lottery.methods
  //       .buyNewLottery(_fee, ticketNumber, date)
  //       .send({ from: account, value: _fee });
  //     console.log("re", re);
  //     setTicketNumber("");
  //     getTotalReward();
  //     getRoundDate();
  //   } else {
  //     alert("Number should have only 3 digits");
  //   }
  // };

  const getRoundDate = useCallback(async () => {
    const date = await Lottery.methods.getRound().call();
    console.log("D: ", date);
  }, [Lottery.methods]);

  // const handleBuyTicket = async () => {
  //   if (ticketNumber >= 100 && ticketNumber <= 999) {
  //     const _fee = Web3.utils.toWei(lotteryFee.toString(), "ether");
  //     await Lottery.methods
  //       .buyLottery(_fee, ticketNumber, dateNow)
  //       .send({ from: account, value: _fee });

  //     setTicketNumber("");
  //     getTotalReward();
  //   } else {
  //     alert("Number should have only 3 digits");
  //   }
  // };

  const handleBuyTicket = async () => {
    if (ticketNumber >= 100 && ticketNumber <= 999) {
      const _fee = Web3.utils.toWei(lotteryFee.toString(), "ether");
      await Lottery.methods
        .buyNewLottery(_fee, ticketNumber, account)
        .send({ from: account, value: _fee });

      setTicketNumber("");
      getTotalReward();
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
    // if (difference < 0) {
    //   var nextFuture = new Date();
    //   var addMinutes = new Date(nextFuture.getTime() + 1*60000);
    //   nextFuture.setDate(nextFuture.getDate() + 15);
    //   setFuture(addMinutes);
    //   setFutureDate(DateNames[nextFuture.getDay()]);
    //   if (nextFuture.getDate() < 10) {
    //     setFutureDay("0" + nextFuture.getDate());
    //   } else {
    //     setFutureDay(nextFuture.getDate());
    //   }
    //   setFutureMonth(monthNames[nextFuture.getMonth()]);
    //   setFutureYear(nextFuture.getFullYear());
    //   if (nextFuture.getHours() < 10) {
    //     setFutureHours("0" + nextFuture.getHours());
    //   } else {
    //     setFutureHours(nextFuture.getHours());
    //   }
    //   if (nextFuture.getMinutes() < 10) {
    //     setFutureMinutes("0" + nextFuture.getMinutes());
    //   } else {
    //     setFutureMinutes(nextFuture.getMinutes());
    //   }

    //   // console.log(futureDate)
    //   // console.log(futureMonth);
    //   // console.log(nextFuture);
    //   // console.log(
    //   //   `${nextFuture.getDay()}/${nextFuture.getDate()}/${
    //   //     nextFuture.getMonth() + 1
    //   //   }/${nextFuture.getFullYear()}/${nextFuture.getHours()}//${nextFuture.getMinutes()}`
    //   // );
    // }
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
            Round 50 | Draw: {dateNow[0]} {dateNow[1]} {dateNow[2]},{" "}
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
          {difference > 0 ? (
            <Button buyLottery={handleBuyTicket}>buy</Button>
          ) : (
            <Button buyLottery={handleBuyTicket}>result</Button>
          )}
        </InputContainer>
      </BrownBackground>
    </Container>
  );
}
