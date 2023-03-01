import React from 'react';
import styled from 'styled-components';
import { HrLine } from '../../components/Common';
import Container from '../../components/Container';
import SlideInItem from '../../components/SlideInItem';
import { Text, Title } from '../../components/Typography';
import { respondTo } from '../../utils/responsive';
import { _wl } from '../../utils/useWording';


const DesignSection = ({...props}) => {
  const wording = _wl('homepage.design');

  return (
    <Root {...props}>
      <Wrapper>
        <CloudLeft>
          <SlideInItem>
            <img src="/images/mint-cloud-1.png" alt="" />
          </SlideInItem>
        </CloudLeft>
        <Title>{ wording.title }</Title>
        <Text className="desktop">{ wording.content }</Text>
        <Text className="mobile">{ wording.content_m }</Text>
        <Gallery>
          { wording.gallery.map((item, i) =>
            <li key={i}>
              <img src={item} alt="" />
            </li>
          ) }
        </Gallery>
        <HrLine />
      </Wrapper>
    </Root>
  )
};

const Root = styled.div`
`

const Wrapper = styled(Container)`
  position: relative;
  .desktop {
    ${respondTo.md} {
      display: none;
    }
  }
  .mobile {
    display: none;
    ${respondTo.md} {
      display: block;
    }
  }
`

const CloudLeft = styled.div`
  position: absolute;
  top: 10%;
  right: -80px;
  width: 240px;
  z-index: 0;
  ${respondTo.md} {
    right: auto;
    left: -60px;
    z-index: -1;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 36px;
  > li {
    width: 50%;
    padding: 8px;
    box-sizing: border-box;
    ${respondTo.md} {
      width: 100%;
      padding: 4px 0px;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
      transition: all .6s ease;
      &:hover {
        transform: scale(1.06);
        filter: drop-shadow(0px 2px 4px hsla(0, 0%, 0%, .4));
      }
    }
  }
`

export default DesignSection;