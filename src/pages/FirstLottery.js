import useAccount from "@hooks/useAccount";
import { useLottery } from "@hooks/useContracts";
import { useCallback, useEffect, useState } from "react";
import Web3 from "web3";

const FirstLottery = () => {
  const lotteryFee = 0.001;
  const account = useAccount();
  const Lottery = useLottery();

  const [myBalance, setMyBalance] = useState(0);
  const [lotteryNumber, setLotteryNumber] = useState(0);
  const [reward, setReward] = useState(0);
  const [lottery, setLottery] = useState("");
  const [result, setResult] = useState("");
  const [allResult, setAllResult] = useState("");
  // const [winDate, setDate] = useState("");

  const getMyBalance = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setMyBalance(parseFloat(Web3.utils.fromWei(_balance.toString(), "ether")));
  }, account);

  const handleBuyLottery = async () => {
    if (lotteryNumber >= 100 && lotteryNumber <= 999) {
      const _fee = Web3.utils.toWei(lotteryFee.toString(), "ether");
      await Lottery.methods
        .buyLottery(_fee, lotteryNumber)
        .send({ from: account, value: _fee });
      setLotteryNumber(0);
      getTotalReward();
      getMyBalance();
      showLottery();
    } else {
      alert("Number should have only 3 digits");
    }
  };

  const getTotalReward = useCallback(async () => {
    const _reward = await Lottery.methods.getReward().call();
    setReward(Web3.utils.fromWei(_reward, "ether"));
  }, [Lottery.methods]);

  /////////////////////////////////////////////////////
  const showLottery = useCallback(async () => {
    const lottery = await Lottery.methods.showLottery().call();
    setLottery(lottery);
  }, [Lottery.methods]);

  /////////////////////////////////////////////////////
  const handleShowResult = async () => {
    const _result = randomNumber(100, 999);
    const keep = await Lottery.methods.keepResult(_result).call();
    console.log("KEEP ", keep);
    setResult(_result);
    getAllResult();
  };

  const getAllResult = useCallback(async () => {
    const _allResult = await Lottery.methods.getAllResult().call();
    // console.log("result: ", _allResult);
    setAllResult(_allResult);
  }, [Lottery.methods]);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // const keepWinDate = useCallback(async () => {
  //   // let date = new Date().getTime();
  //   // let dateInUnixTimestamp = date / 1000;
  //   const date = await Lottery.methods.keepWinDate().call();
  //   console.log("WIN ", date);
  // }, [Lottery.methods]);

  // const getWinDate = useCallback(async () => {
  //   let dateInUnixTimestamp = await Lottery.methods.getWinDate().call();
  //   // let date = new Date(dateInUnixTimestamp * 1000);
  //   console.log("DATE: ", dateInUnixTimestamp);
  //   // setDate(date);
  // }, [Lottery.methods]);

  useEffect(() => {
    getMyBalance();
    getTotalReward();
    showLottery();
    getAllResult();
  }, [getMyBalance, getTotalReward, showLottery, getAllResult]);

  return (
    <>
      <h1>My Balance: {myBalance}</h1>
      <hr />
      <h1>Total Reward: {reward}</h1>
      <div>
        <input
          type="number"
          onChange={(e) => setLotteryNumber(e.target.value)}
        ></input>
        <button onClick={handleBuyLottery}>Buy Ticket</button>
        <br />
        <br />
        <hr />
        <h1>Lottery Number: {lottery}</h1>
        <hr />
        <button onClick={handleShowResult}>Announce Result</button>
        <h1>Result: {result}</h1>
        <h2>History Result: {allResult}</h2>
        <hr />
        {/* <h1>Date: {winDate}</h1> */}
      </div>
    </>
  );
};

export default FirstLottery;
