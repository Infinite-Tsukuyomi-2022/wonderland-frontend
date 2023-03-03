import { isAndroid, isIOS } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { metamaskAppUrl } from "../contract";
import { setWalletAddress, setWalletDisplay, setWalletIsFound, setWalletIsNotFound, setWalletStatusConnected, setWalletStatusDisconnected } from '../store/wallet';

const useConnectWallet = () => {
  const dispatch = useDispatch();
  const { status, walletAddress, walletDisplay, isNotFound } = useSelector(state => state.wallet);

  function simplifyAddress(address) {
    return address.slice(0,6) + '...' + address.slice(-4);
  }

  const handleConnectWalletSuccess = (address) => {
    dispatch(setWalletStatusConnected());
    dispatch(setWalletAddress(address));
    dispatch(setWalletDisplay(simplifyAddress(address)));
    dispatch(setWalletIsFound());
  }

  async function handleDisconnectWallet () {
    dispatch(setWalletStatusDisconnected());
    dispatch(setWalletAddress(null));
    dispatch(setWalletDisplay(null));
  }

  async function handleConnectWallet () {
    const isMobileDevice = isAndroid || isIOS;
    const isAppNotFound = !window.ethereum || !window.ethereum.isMetaMask;
    if (isMobileDevice && isAppNotFound) {
      window.location = metamaskAppUrl;
    }
    else {
      const address = await getEthereumAddress({ method: "eth_requestAccounts" });
      if (address === null) {
        dispatch(setWalletIsNotFound());
      }
      if (address && address.length > 0){
        handleConnectWalletSuccess(address);
      }
    }
  }

  const getEthereumAddress = async (request) => {
    let address = null;
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request(request);
        address = addressArray[0];
      }
      catch (err) {
        address = '';
        console.log(err);
      }
    } else { 
      address = null;
    }
    return address;
  };

  return { 
    walletAddress,
    walletDisplay,
    status,
    isNotFound,
    onConnect: handleConnectWallet,
    handleDisconnectWallet
  }

  
}

export default useConnectWallet;