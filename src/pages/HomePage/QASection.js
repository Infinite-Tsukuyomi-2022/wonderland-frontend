import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Container from '../../components/Container';
import SlideInItem from '../../components/SlideInItem';
import { fontFamily, Title } from '../../components/Typography';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _wl } from '../../utils/useWording';

const QASection = ({...props}) => {
  const wording = _wl('homepage.qa');
  return (
    <Root {...props}>
      <Wrapper>
        <CloudLeft>
          <SlideInItem>
            <img src="/images/qa-cloud.png" alt="" />
          </SlideInItem>
        </CloudLeft>
        <Title>{ wording.title }</Title>
        <List>
          { wording.list.map((item, i) => 
            <li key={i}>
              <QuestionItem data={item} />
            </li>
          ) }
        </List>
      </Wrapper>
    </Root>
  )
}

const QuestionItem = ({ data }) => {
  const { question, answer } = data;
  const [ active, setActive ] = useState(false);
  
  function handleClickButton() {
    setActive(!active);
  }
  
  return (
    <QuestionItemRoot active={active}>
      <button onClick={handleClickButton}>
        <span>{ question }</span>
        { active ? <Arrow /> : <ArrowLine /> }
      </button>
      <p dangerouslySetInnerHTML={{__html: answer}} />
    </QuestionItemRoot>
  )
}

const Arrow = () => (
  <svg width="17.137" height="9.96" viewBox="0 0 17.137 9.96">
    <path id="Path_254" data-name="Path 254" d="M675.025,221.736l8.569-9.961,8.569,9.961Z" transform="translate(692.162 221.736) rotate(180)" fill="#273545"/>
  </svg>
)
const ArrowLine = () => (
  <svg width="18.654" height="12.146" viewBox="0 0 18.654 12.146">
  <path id="Path_221" data-name="Path 221" d="M692.162,221.736l-8.569-9.961-8.569,9.961" transform="translate(-674.267 -210.242)" fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="2"/>
</svg>

)

const Root = styled.div`
`

const Wrapper = styled(Container)`
  position: relative;
`

const CloudLeft = styled.div`
  position: absolute;
  top: 5%;
  left: -300px;
  width: 800px;
  z-index: -1;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  box-sizing: border-box;
  > li {
    margin-bottom: 24px;
    ${respondTo.md} {
      margin-bottom: 8px;
    }
  }
`

const QuestionItemRoot = styled.div`
  text-align: center;
  transition: all .3s ease;
  border-bottom: 1px solid ${colors.gray};
  button {
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 24px;
    padding: 16px 24px;
    width: 100%;
    height: auto;
    font-size: 24px;
    background-color: transparent;
    text-align: center;
    ${fontFamily};
    ${respondTo.md} {
      align-items: flex-start;
      padding: 10px 24px;
      font-size: 20px;
    }
    span {
      display: block;
      width: 100%;
    }
    svg {
      ${respondTo.md} {
        margin-top: 4px;
      }
    }
  }
  p {
    padding: 0 12px;
    padding-bottom: 0;
    max-height: 0;
    ${fontFamily};
    font-size: 12px;
    color: ${colors.blue};
    overflow: hidden;
    text-align: left;
    line-height: 1.8em;
    transition: all .3s ease;
    box-sizing: border-box;
    white-space: break-spaces;
    a {
      text-decoration: underline;
    }
    ${respondTo.md} {
      margin-left: 0;
    }
    ${({ active }) => active && css`
      border-top: 1px solid ${colors.gray};
      margin-top: 6px;
      padding-top: 24px;
      padding-bottom: 24px;
      max-height: 100vh;
    `}
  }
`


export default QASection;