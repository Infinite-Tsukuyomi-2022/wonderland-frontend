import React from 'react';
import styled from 'styled-components';
import { MenuBurger, MenuClose } from '../Icons';
import { respondTo } from '../../utils/responsive';
import { colors } from '../../constants/colors';

const MenuBurgerButton = ({open, onClick, ...props}) => {
  return (
    <Root onClick={onClick} {...props}>
      { open ? <MenuClose /> : <MenuBurger /> }
    </Root>
  )
}

const Root = styled.button`
  display: none;
  border: 0;
  border-radius: 0;
  margin-left: 16px;
  padding: 0;
  width: 25px;
  height: 25px;
  color: ${colors.blue};
  background-color: transparent;
  opacity: 0.6;
  z-index: 2;
  > svg {
    width: 100%;
    height: 100%;
  }
  ${ respondTo.lg } {
    display: block;
  }
`

export default MenuBurgerButton;
