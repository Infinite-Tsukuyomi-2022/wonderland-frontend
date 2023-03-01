import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useConnectWallet from '../../utils/useConnectWallet';
import { colors } from '../../constants/colors';
import { fontFamily } from '../Typography';
import { respondTo } from '../../utils/responsive';

const ConnectButton = ({ msg_gold, msg_whitelist, ...props }) => {
  const { status, walletDisplay, walletAddress, onConnect, isNotFound } = useConnectWallet();

  useEffect(() => {
    window.ethereum?.on('accountsChanged', function (accounts) {
      if (status === 'connected') {
        window.location.reload();
      }
    })
  }, [walletAddress])
  
  async function handleClickWallet() {
    if (isNotFound) return;
    if (status === 'disconnected') {
      await onConnect();
    };
  }

  return (
    <Root {...props}>
      <Icon className="icon" />
      <Button onClick={handleClickWallet} disabled={isNotFound} >
        { status === 'disconnected' && 'Connect Wallet' }
        { status === 'connected' && walletDisplay }
      </Button>
    </Root>
  )
}

const Icon = ({...props}) => (
  <svg width="27" height="25" viewBox="0 0 27 25" {...props}>
    <path d="M1200.789-17.161a3,3,0,0,0-1.938-2.212v-1.184a7.008,7.008,0,0,0-7-7h-11a7.008,7.008,0,0,0-7,7v11a7.008,7.008,0,0,0,7,7h11a7.008,7.008,0,0,0,7-7V-9.74a3,3,0,0,0,1.939-2.213,3.009,3.009,0,0,0,.061-.6v-4A2.932,2.932,0,0,0,1200.789-17.161Zm-8.938,12.6h-11a5.006,5.006,0,0,1-5-5v-11a5.006,5.006,0,0,1,5-5h11a5.007,5.007,0,0,1,5,5v1h-10a2.95,2.95,0,0,0-.6.062,3,3,0,0,0-2.4,2.939v4a3,3,0,0,0,3,3h10A5.007,5.007,0,0,1,1191.851-4.557Zm7-8a1,1,0,0,1-1,1h-11a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1h11a1,1,0,0,1,1,1Z" transform="translate(-1173.851 27.557)" fill="#2a3544"/>
  </svg>
)



const Root = styled.div`
  display: flex;
  align-items: center;
  .icon {
    ${respondTo.lg} {
      display: none;
    }
  }
`
const Button = styled.div`
  position: relative;
  cursor: pointer;
  padding: 5px 8px 4px;
  margin-left: 6px;
  border-radius: 18px;
  color: #FFF;
  font-size: 12px;
  letter-spacing: 0.5px;
  background-color: #2A3544;
  white-space: nowrap;
  ${fontFamily};
`


export default ConnectButton;