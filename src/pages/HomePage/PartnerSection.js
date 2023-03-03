import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HrLine } from '../../components/Common';
import Container from '../../components/Container';
import SlideInItem from '../../components/SlideInItem';
import { Subtitle, Text, Title } from '../../components/Typography';
import { respondTo } from '../../utils/responsive';
import { _wl } from '../../utils/useWording';


const PartnerSection = ({...props}) => {
  const wording = _wl('homepage.partner');

  return (
    <Root {...props}>
      <Wrapper>
        <CloudLeft>
          <SlideInItem>
            <img src="/images/partner-cloud.png" alt="" />
          </SlideInItem>
        </CloudLeft>
        <Title>{ wording.title }</Title>
        <List qty={wording.list.length}>
          { wording.list.map((item, i) =>
            item.link ?
            <li key={i}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.photo} alt="" />
              </a>
            </li>
            :
            <li key={i}>
              <img src={item.photo} alt="" />
            </li>
          ) }
        </List>
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
  top: 0px;
  left: -80px;
  width: 200px;
  z-index: 0;
 img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 -30px;
  margin-top: 72px;
  ${respondTo.md} {
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
  }
  > li {
    margin: 0 25px;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* padding: 0 30px; */
    /* max-width: ${({ qty }) => (100/qty)}%; */
    box-sizing: border-box;
    ${respondTo.md} {
      width: 33.33%;
      padding: 20px 0;
    }
    a {
      display: block;
    }
    img {
      display: block;
      ${respondTo.md} {
        width: 100%;
        height: auto;
      }
    }
  }
`

export default PartnerSection;