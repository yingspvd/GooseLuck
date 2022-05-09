import { createContext, useEffect, useState, useCallback } from "react";
import { setAccountData, detectAccount } from "@slices/account";

import useAppDispatch from "@hooks/useAppDispatch";
import Loading from "@components/Utils/Loading/Loading";
import Web3 from "web3";
import useAppSelector from "@hooks/useAppSelector";

export const DAppContext = createContext(false);

export const DAppProvider = ({ children }) => {
  const dispatch = useAppDispatch();
  const [accountLoading, setAccountLoading] = useState(true);
  const { account } = useAppSelector((state) => state.account);

  const loadWeb3 = useCallback(async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();

      const accountData = await detectAccount();
      if (accountData) {
        dispatch(setAccountData(accountData));
        setAccountLoading(false);
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }, [dispatch]);

  useEffect(() => {
    const Loader = async () => {
      await loadWeb3();
    };
    Loader();
  }, [dispatch, account, loadWeb3]);

  if (!accountLoading) {
    return <DAppContext.Provider>{children}</DAppContext.Provider>;
  } else {
    return (
      <DAppContext.Provider>
        <Loading />
      </DAppContext.Provider>
    );
  }
};
