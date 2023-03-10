import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { floatAnimation, HrLine } from '../../components/Common';
import Container from '../../components/Container';
import SlideInItem from '../../components/SlideInItem';
import { fontFamilyBold, fontFamily, Subtitle, Text, Title } from '../../components/Typography';
import { colors } from '../../constants/colors';
import { mintNFT } from '../../utils/mintNFT';
import { hasMinted } from '../../utils/hasMinted';
import { switchNetwork } from '../../utils/switchNetwork';
import { respondTo } from '../../utils/responsive';
import useConnectWallet from '../../utils/useConnectWallet';
import { _wl } from '../../utils/useWording';


const MintSection = ({...props}) => {
  const wording = _wl('homepage.mint');
  const [ currentStatus, setCurrentStatus ] = useState(null);
  const { lang } = useSelector(state => state.language);
  const wallet = useSelector(state => state.wallet);
  const { onConnect } = useConnectWallet();
  
  const handleClickMintButton = async() => {
    if (wallet.status === 'connected') {
      await switchNetwork();
      const { quantity } = await hasMinted(wallet.walletAddress);
      if (quantity < 1){
        const { status, message } = await mintNFT(1);
        if (status === 'succeed') {
          setCurrentStatus('succeed');
        }
        else if (status === 'failed') {
          setCurrentStatus('failed');
        }
      }
      else {
        setCurrentStatus('minted');
        // Add hint here 
      }
    }
    else {
      await onConnect();
      await switchNetwork();
    }
  }

  return (
    <Root {...props}>
      <Wrapper>
        <CloudLeft>
          <SlideInItem>
            <img src="/images/mint-cloud-1.png" alt="" />
          </SlideInItem>
        </CloudLeft>
        <CloudRight>
          <SlideInItem>
            <img src="/images/mint-cloud-2.png" alt="" />
          </SlideInItem>
        </CloudRight>
        <Float animationTime={4 + Math.random() * 1}>
          <SlideInItem>
            <img src="/images/mint-float.png" alt="" />
          </SlideInItem>
        </Float>
        <Title>{ wording.title }</Title>
        <Main>
          <img src="/images/mint-main.png" alt="" />
          <Button onClick={handleClickMintButton}>{
            currentStatus === 'minted' & wallet.status === 'connected' ? wording.minted : wallet.status === 'connected' ? wording.free : wording.connect
          }</Button>
        </Main>
        <Content lang={lang}>
          <div className="count">
            { lang !== 'en' && <span className="total">{ wording.total }</span> }
            <span className="qty">{ wording.total_count }</span>
            { lang === 'en' && <span className="total">{ wording.total }</span> }
          </div>
          <Text className="info">{ wording.info1 }</Text>
          <Text className="info">{ wording.info2 }</Text>
          <div className="hint">
            <p>{ wording.hint }</p>
          </div>
        </Content>
        <HrLine />
      </Wrapper>
    </Root>
  )
};

const Root = styled.div`
`

const Wrapper = styled(Container)`
  position: relative;
`

const CloudLeft = styled.div`
  position: absolute;
  top: -80px;
  left: -260px;
  width: 420px;
  z-index: 0;
  ${respondTo.md} {
    z-index: -1;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const CloudRight = styled.div`
  position: absolute;
  top: 40%;
  right: -40px;
  width: 280px;
  z-index: 0;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Float = styled.div`
  position: absolute;
  bottom: 0;
  right: -40px;
  width: 80px;
  z-index: 0;
  animation: ${floatAnimation} ${({ animationTime }) => animationTime}s ease infinite;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  position: relative;
  width: 480px;
  margin: 0 auto;
  margin-top: 12px;
  max-width: 100%;
  img {
    display: block;
    width: 100%;
    height: auto;
    animation: ${floatAnimation} 4s ease infinite;
  }
`

const Button = styled.button`
  position: absolute;
  left: 50%;
  top: 100%;
  padding: 0 36px;
  height: 78px;
  transform: translate(-50%, -50%);
  border-radius: 48px;
  border: 2px solid #C1FC65;
  ${fontFamilyBold};
  font-size: 38px;
  color: ${colors.blue};
  background: ${colors.white};
  box-shadow: 0 4px 18px hsla(0, 0%, 0%, .3);
  white-space: nowrap;
  transition: all .3s ease;
  &:hover {
    padding: 0 32px;
    font-size: 40px;
    box-shadow: 0 0px 0px hsla(0, 0%, 0%, .3);
  }
`

const Content = styled.div`
  margin: 0 auto;
  margin-top: 64px;
  ${respondTo.md} {
    margin-top: 40px;
  }
  > .count {
    display: flex;
    align-items: center;
    justify-content: center;
    > .total {
      display: block;
      margin: 0 12px;
      font-size: 30px;
      color: ${colors.blue};
      ${fontFamily};
      ${respondTo.md} {
        font-size: 16px;
      }
    }
    > .qty {
      font-weight: 900;
      font-family: 'Roboto';
      font-style: italic;
      font-size: 72px;
      color: #273545;
      ${respondTo.md} {
        font-size: 54px;
      }
    }
  }
  > .info {
    white-space: nowrap;
    ${respondTo.md} {
      margin-bottom: 24px;
      white-space: break-spaces;
    }
    br {
      display: block;
    }
  }
  > .hint {
    margin-top: 24px;
    text-align: center;
    ${respondTo.md} {
      margin-top: 0;
    }
    p {
      display: inline-block;
      padding: 9px 0;
      border-top: 1px solid ${colors.gray};
      border-bottom: 1px solid ${colors.gray};
      ${fontFamily};
      font-size: ${({lang}) => lang === 'en' ? '13px' : '16px'};
      color: ${colors.gray};
      text-align: center;
      ${respondTo.md} {
        font-size: 13px;
      }
    }
  }
`

export default MintSection;