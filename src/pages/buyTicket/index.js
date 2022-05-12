import React, { useEffect, useState } from "react";
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
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [future, setFuture] = useState("05/13/2022");
  const [amPm, setAmPm] = useState("AM");
  const [futureDate, setFutureDate] = useState("Fri");
  const [futureDay, setFutureDay] = useState("13");
  const [futureMonth, setFutureMonth] = useState("May");
  const [futureYear, setFutureYear] = useState("2022");
  const [futureHours, setFutureHours] = useState("00");
  const [futureMinutes, setFutureMinutes] = useState("00");
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
      var nextFuture = new Date();
      nextFuture.setDate(nextFuture.getDate() + 15);
      setFuture(nextFuture);
      setFutureDate(DateNames[nextFuture.getDay()]);
      if (nextFuture.getDate() < 10) {
        setFutureDay("0" + nextFuture.getDate());
      } else {
        setFutureDay(nextFuture.getDate());
      }
      setFutureMonth(monthNames[nextFuture.getMonth()]);
      setFutureYear(nextFuture.getFullYear());
      if (nextFuture.getHours() < 10) {
        setFutureHours("0" + nextFuture.getHours());
      } else {
        setFutureHours(nextFuture.getHours());
      }
      if (nextFuture.getMinutes() < 10) {
        setFutureMinutes("0" + nextFuture.getMinutes());
      } else {
        setFutureMinutes(nextFuture.getMinutes());
      }

      // console.log(futureDate)
      // console.log(futureMonth);
      // console.log(nextFuture);
      // console.log(
      //   `${nextFuture.getDay()}/${nextFuture.getDate()}/${
      //     nextFuture.getMonth() + 1
      //   }/${nextFuture.getFullYear()}/${nextFuture.getHours()}//${nextFuture.getMinutes()}`
      // );
    }
  };

  return (
    <Container>
      <Navbar />
      <GreenBackground>
        <Logo>
          <StyledImage src="/gooseluck.svg" />
        </Logo>
        <RewardText>368.59 ETH</RewardText>
        <InfoYellow>IN PRIZE!</InfoYellow>
      </GreenBackground>
      <WhiteBackground>
        <TimeContainer>
          <InfoBrown style={{ marginRight: 60 }}>Next Draw</InfoBrown>
          <InfoBrown style={{ fontSize: 16 }}>
            Round 50 | Draw: {futureDate} {futureMonth} {futureDay},{" "}
            {futureYear}, {futureHours}:{futureMinutes}
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
            type="text"
            maxLength="3"
            // pattern="\d{4}"
            // pattern="[0-9]*"
          />
          <Button></Button>
        </InputContainer>
      </BrownBackground>
    </Container>
  );
}
