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
  const [totalReward, setTotalReward] = useState(0);
  const [lottery, setLottery] = useState("");
  const [allLottery, setAllLottery] = useState("");
  const [result, setResult] = useState(0);
  const [allResult, setAllResult] = useState("");
  const [isWin, setIsWin] = useState("");

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
      showAllLottery();
    } else {
      alert("Number should have only 3 digits");
    }
  };

  const getTotalReward = useCallback(async () => {
    const _reward = await Lottery.methods.getReward().call();
    setTotalReward(Web3.utils.fromWei(_reward, "ether"));
  }, [Lottery.methods]);

  /////////////////////////////////////////////////////
  const showLottery = useCallback(async () => {
    const _lottery = await Lottery.methods.showLottery(account).call();
    setLottery(_lottery);
  }, [Lottery.methods]);

  const showAllLottery = useCallback(async () => {
    const _allLottery = await Lottery.methods.showAllLottery().call();
    setAllLottery(_allLottery);
  }, [Lottery.methods]);

  /////////////////////////////////////////////////////
  const handleShowResult = async () => {
    const _result = randomNumber(100, 999);
    const test = await Lottery.methods.keepResult(_result).call();
    console.log("test ", test);
    setResult(_result);
    getAllResult();
  };

  const getAllResult = useCallback(async () => {
    const _allResult = await Lottery.methods.getAllResult().call();
    setAllResult(_allResult);
  }, [Lottery.methods]);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  ////////////////////////////////////////
  const handleCheckResult = async () => {
    const _isWin = await Lottery.methods.checkResult(account, result).call();
    console.log("win: ", _isWin);
    if (_isWin) {
      setIsWin("Congratulations!");
    } else {
      setIsWin("Try again");
    }
  };

  useEffect(() => {
    getMyBalance();
    getTotalReward();
    showLottery();
    getAllResult();
    showAllLottery();
  }, [getMyBalance, getTotalReward, showLottery, getAllResult, showAllLottery]);

  return (
    <>
      <h1>My Balance: {myBalance}</h1>
      <hr />
      <h1>Total Reward: {totalReward}</h1>
      <div>
        <input
          type="number"
          onChange={(e) => setLotteryNumber(e.target.value)}
        ></input>
        <button onClick={handleBuyLottery}>Buy Ticket</button>
        <br />
        <br />
        <hr />
        <h1>My Lottery Number: {lottery}</h1>
        <h1>All Lottery Number: {allLottery}</h1>
        <hr />
        <button onClick={handleShowResult}>Announce Result</button>
        <h1>Result: {result}</h1>
        <h2>History Result: {allResult}</h2>
        <hr />
        <button onClick={handleCheckResult}>Is Win</button>
        <h1>IsWin: {isWin}</h1>
        {/* <h1>Reward: {reward}</h1> */}
      </div>
    </>
  );
};

export default FirstLottery;
