import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { floatAnimation, HrLine } from '../../components/Common';
import Container from '../../components/Container';
import SlideInItem from '../../components/SlideInItem';
import { Subtitle, Text } from '../../components/Typography';
import { respondTo } from '../../utils/responsive';
import { _wl } from '../../utils/useWording';

const HeadingSection = ({...props}) => {
  const wording = _wl('homepage.heading');

  return (
    <Root {...props}>
      <Wrapper>
        <Background />
        <Logo>
          <img src="/images/heading-logo.svg" alt="" />
        </Logo>
        <Island className="front">
          <div className="image"><img src="/images/heading-island-1.png" alt="" /></div>
        </Island>
        <Island className="left">
          <div className="image"><img src="/images/heading-island-2.png" alt="" /></div>
        </Island>
        <Island className="right">
          <div className="image"><img src="/images/heading-island-3.png" alt="" /></div>
        </Island>
        <Item
          animationTime={4 + Math.random() * 1}
          position="right: 55%; top: 180px;"
          positionM="right: 55%; top: 120px;"
          width="380px"
          widthM="160px"
        ><img src="/images/heading-fish.png" alt="" /></Item>
        <Item
          animationTime={4 + Math.random() * 1}
          position="right: 80%; top: 40px;"
          positionM="right: 80%; top: 20px;"
          width="380px"
          widthM="200px"
        ><img src="/images/heading-cloud2.png" alt="" /></Item>
        <Item
          animationTime={4 + Math.random() * 1}
          position="right: 85%; top: 90px;"
          positionM="right: 85%; top: 90px;"
          width="160px"
          widthM="80px"
        ><img src="/images/heading-state.png" alt="" /></Item>
        <Item
          animationTime={4 + Math.random() * 1}
          position="left: 75%; top: 180px;"
          positionM="left: 75%; top: 120px;"
          width="240px"
          widthM="120px"
        ><img src="/images/heading-milefo.png" alt="" /></Item>
        <Item
          animationTime={4 + Math.random() * 1}
          position="left: 56%; top: 260px;"
          positionM="left: 60%; top: 150px;"
          width="300px"
          widthM="160px"
        ><img src="/images/heading-squid.png" alt="" /></Item>
        <Item
          animationTime={4 + Math.random() * 1}
          position="left: 80%; top: 40px;"
          positionM="left: 80%; top: 40px;"
          width="200px"
          widthM="200px"
        ><img src="/images/heading-cloud.png" alt="" /></Item>
        <Shadow><img src="/images/heading-island-1-shadow.png" alt="" /></Shadow>
      </Wrapper>
      <ContentContainer>
        <Item
          animationTime={4 + Math.random() * 1}
          position="left: 0%; bottom: 0px;"
          positionM="left: 0%; bottom: -150px;"
          width="160px"
          widthM="60px"
        >
          <SlideInItem><img src="/images/heading-cloud4.png" alt="" /></SlideInItem>
        </Item>
        <Ice animationTime={4 + Math.random() * 1}>
          <SlideInItem>
            <img src="/images/heading-ice.png" alt="" />
          </SlideInItem>
        </Ice>
        <Item
          animationTime={4 + Math.random() * 1}
          position="left: 86%; bottom: -180px;"
          positionM="left: 86%; bottom: -60px;"
          width="380px"
          widthM="200px"
        >
          <SlideInItem><img src="/images/heading-cloud3.png" alt="" /></SlideInItem>
        </Item>
        <Boat animationTime={4 + Math.random() * 1}>
          <SlideInItem>
            <img src="/images/heading-boat.png" alt="" />
          </SlideInItem>
        </Boat>
        <Subtitle className="title">{ wording.title }</Subtitle>
        <Text className="text">{ wording.content }</Text>
        <HrLine />
      </ContentContainer>
    </Root>
  )
};

const Root = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  width: 100vw;
  min-height: 1000px;
  overflow-x: hidden;
  ${respondTo.lg} {
    min-height: 620px;
  }
`

const Logo = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  > img {
    display: block;
    width: 680px;
    max-width: 100%;
    height: auto;
  }
`

const Shadow = styled.div`
  position: absolute;
  top: 880px;
  left: 50%;
  opacity: 0.75;
  text-align: center;
  transform: translateX(-50%);
  z-index: 2;
  ${respondTo.lg} {
    top: 540px;
  }
  > img {
    width: 15vw;
    height: auto;
  }
`

const Item = styled.div`
  position: absolute;
  ${({ position }) => position};
  z-index: 0;
  animation: ${floatAnimation} ${({ animationTime }) => animationTime}s ease infinite;
  ${respondTo.lg} {
    z-index: 4;
    ${({ positionM }) => positionM};
  }
  img {
    display: block;
    width: ${({ width }) => width};
    height: auto;
    ${respondTo.lg} {
      width: ${({ widthM }) => widthM};
    }
  }
`

const Background = styled.div`
  position: absolute;
  top: 260px;
  left: 50%;
  width: 95vw;
  border-radius: 500px;
  height: 550px;
  transform: translateX(-50%);
  background-image: radial-gradient(at top, rgba(39,255,242,1) 0%, rgba(0,104,234,1) 100%);
  background-position: center top;
  ${respondTo.lg} {
    top: 160px;
    width: 580px;
    height: 250px;
  }
`

const Island = styled.div`
  position: absolute;
  img {
    object-fit: contain;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  > .image {
    width: 100%;
  }
  &.front {
    top: 500px;
    left: 50%;
    transform: translateX(-50%);
    ${respondTo.lg} {
      top: 280px;
    }
    img {
      width: 320px;
      ${respondTo.lg} {
        max-width: 200px;
      }
    }
    z-index: 3;
    .image {
      animation: ${floatAnimation} ${4 + Math.random() * 1}s ease infinite;
    }
  }
  &.left {
    top: 180px;
    right: 40vw;
    ${respondTo.lg} {
      right: calc(50vw - 80px);
      top: 100px;
    }
    img {
      width: 780px;
      ${respondTo.lg} {
        max-width: 450px;
      }
    }
    z-index: 2;
    .image {
      animation: ${floatAnimation} ${4 + Math.random() * 1}s ease infinite;
    }
  }
  &.right {
    top: 420px;
    left: 55%;
    ${respondTo.lg} {
      top: 230px;
    }
    img {
      width: 560px;
      ${respondTo.lg} {
        width: 380px;
      }
    }
    z-index: 2;
    .image {
      animation: ${floatAnimation} ${4 + Math.random() * 1}s ease infinite;
    }
  }
`

const ContentContainer = styled(Container)`
  position: relative;
  .title {
    position: relative;
    margin-bottom: 12px;
    z-index: 1;
  }
  .text {
    position: relative;
    z-index: 1;
  }
`

const Ice = styled.div`
  position: absolute;
  bottom: 120px;
  left: 0px;
  width: 54px;
  z-index: 0;
  animation: ${floatAnimation} ${({ animationTime }) => animationTime}s ease infinite;
  ${respondTo.lg} {
    bottom: -120px;
    left: 0px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Boat = styled.div`
  position: absolute;
  bottom: -80px;
  right: -160px;
  width: 270px;
  z-index: 0;
  animation: ${floatAnimation} ${({ animationTime }) => animationTime}s ease infinite;
  ${respondTo.lg} {
    width: 120px;
    bottom: -20px;
    right: 0px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export default HeadingSection;