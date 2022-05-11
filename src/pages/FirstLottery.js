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
  const [lottery, setLottery] = useState();

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

  const showLottery = useCallback(async () => {
    const lottery = await Lottery.methods.showLottery().call();
    setLottery(lottery);
  }, [Lottery.methods]);

  useEffect(() => {
    getMyBalance();
    getTotalReward();
    showLottery();
  }, [getMyBalance, getTotalReward, showLottery]);

  return (
    <>
      <h1>My Balance: {myBalance}</h1>
      <h1>Total Reward: {reward}</h1>
      <div>
        <input
          type="number"
          onChange={(e) => setLotteryNumber(e.target.value)}
        ></input>
        <button onClick={handleBuyLottery}>Buy Ticket</button>
        <h2>Lottery Number: {lottery}</h2>
      </div>
    </>
  );
};

export default FirstLottery;
