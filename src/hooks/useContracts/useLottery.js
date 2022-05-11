import useContract from "../useContract";
import config from "config.json";
import Lottery_ABI from "../../abis/Lottery.json";

const useLottery = () => {
  const abi = Lottery_ABI.abi;
  const contract = useContract(
    abi,
    Lottery_ABI.networks[config.networkId].address
  );

  const methods = contract.methods;
  const address = contract._address;

  return { contract, methods, address };
};

export default useLottery;
