import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { Twitter, Facebook, Discord, Opensea, Instagram } from '../../components/Icons';

const SocialItem = ({icon, children, ...props}) => {
  return (
    <Item {...props}>
      { children }
      { icon === 'Twitter' && <Twitter /> }
      { icon === 'Instagram' && <Instagram /> }
      { icon === 'Facebook' && <Facebook /> }
      { icon === 'Discord' && <Discord /> }
      { icon === 'Opensea' && <Opensea /> }
    </Item>
  )
}

const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2A3544;
  border-radius: 50%;
  color: #FFF;
  width: 28px;
  height: 28px;
  &:hover {
    opacity: 1;
  }
  ${respondTo.lg} {
    width: 40px;
    height: 40px;
  }
  svg, img {
    display: block;
    width: 70%;
    height: auto;
  }
`


export default SocialItem;