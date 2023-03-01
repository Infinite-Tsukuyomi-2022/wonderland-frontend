import React from 'react';
import styled from 'styled-components';
import { CustomOrder, floatAnimation, HrLine } from '../../components/Common';
import Container from '../../components/Container';
import SlideInItem from '../../components/SlideInItem';
import { Text, Title } from '../../components/Typography';
import { respondTo } from '../../utils/responsive';
import { _wl } from '../../utils/useWording';


const RoadmapSection = ({...props}) => {
  const wording = _wl('homepage.roadmap');

  return (
    <Root {...props}>
      <Wrapper>
        <CloudLeft>
          <SlideInItem>
            <img src="/images/roadmap-cloud-1.png" alt="" />
          </SlideInItem>
        </CloudLeft>
        <CloudRight>
          <SlideInItem>
            <img src="/images/roadmap-cloud-2.png" alt="" />
          </SlideInItem>
        </CloudRight>
        <Float animationTime={4 + Math.random() * 1}>
          <SlideInItem>
            <img src="/images/roadmap-float.png" alt="" />
          </SlideInItem>
        </Float>
        <Title>{ wording.title }</Title>
        <ListWrap>
          <List>
            { wording.list.map((item, i) =>
              <div key={i} className="item">
                <div className="index">
                  <img src={`/images/roadmap-${i+1}.svg`} alt="" />
                </div>
                <CustomOrder className="list">
                  { item.map((child, j) =>
                    <li key={j}>
                      <Text className='text'>{ child }</Text>
                    </li>
                  ) }
                </CustomOrder>
              </div>
            ) }
          </List>
        </ListWrap>
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
  top: 20px;
  left: -80px;
  width: 180px;
  z-index: 0;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const CloudRight = styled.div`
  position: absolute;
  bottom: -4%;
  right: -240px;
  width: 600px;
  z-index: 0;
  ${respondTo.md} {
    right: -160px;
    bottom: 180px;
    width: 360px;
    z-index: -1;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Float = styled.div`
  position: absolute;
  bottom: 10px;
  left: -80px;
  width: 120px;
  z-index: 0;
  animation: ${floatAnimation} ${({ animationTime }) => animationTime}s ease infinite;
  ${respondTo.md} {
    left: 0px;
    bottom: 180px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56px;
  ${respondTo.md} {
    margin-top: 0;
  }
`

const List = styled.ul`
  .item {
    display: flex;
    margin-bottom: 56px;
    ${respondTo.md} {
      display: block;
      margin-bottom: 0px;
    }
    .index {
      width: 120px;
      ${respondTo.md} {
        margin: 0 auto;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .list {
      width: calc(100% - 120px);
      ${respondTo.md} {
        width: calc(100% - 20px);
        padding-left: 20px;
      }
    }
    .text {
      font-family: 'Roboto Slab', 'GenSekiGothic-B', sans-serif;
      font-weight: 600;
    }
  }
`

export default RoadmapSection;