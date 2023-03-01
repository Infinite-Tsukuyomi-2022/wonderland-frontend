import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
// import useConnectWallet from '../../utils/useConnectWallet';
// import Web3 from 'web3';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
// const web3 = new Web3(Web3.givenProvider);
// const contractABI = require("../../contract-abi.json");
// const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS

const ConnectButton = ({ data, onLinkClick, ...props }) => {
  // const { status, connectId, onConnect } = useConnectWallet();
  const status = 'disconnect';
  const connectId = '0x123...123';
  
  const [ curBalance, setBalance ] = useState("0");

  useEffect(() => {
    // async function fetchBalance() {
    //   const NFTContract = new web3.eth.Contract(contractABI, contractAddress);

    //   if (window.ethereum) {
    //     const balance = await NFTContract.methods.balanceOf(window.ethereum.selectedAddress, 1).call();
    //     setBalance(balance);
    //   }
    // }
    // fetchBalance()
  }, []); 

  async function handleClickConnectButton() {
    // if (status !== 'connect') onConnect();
  }
  
  return (
    <Root {...props}>
      <WalletButton>
        <span>CONNECT WALLET</span>
      </WalletButton>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  > .hint {
    transition: all .3s ease;
    transform: translateY(50%);
    opacity: 0;
    visibility: hidden;
  }
  &:hover > .hint {
    transform: translateY(0%);
    opacity: 1;
    visibility: visible;
  }
`

const WalletButton = styled.button`
  border: 1px solid ${colors.green};
  border-radius: 12px;
  padding: 0 24px;
  font-size: 16px;
  height: 38px;
  color: ${colors.green};
  background: transparent;
  white-space: nowrap;
  ${respondTo.md} {
    border-radius: 8px;
    padding: 0 14px;
    height: 26px;
    font-size: 12px;
  }
`


export default ConnectButton;