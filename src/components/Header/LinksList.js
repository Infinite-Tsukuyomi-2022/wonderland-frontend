import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { respondTo } from '../../utils/responsive';
import { colors } from '../../constants/colors';
import { _w } from '../../utils/useWording';
import { fontFamily } from '../Typography';
import { useSelector } from 'react-redux';

const LinksList = ({ data, onClickLink, ...props }) => {
  const { lang } = useSelector(state => state.language);
  
  return (
    <List {...props}>
      { data.map((link, i) =>
        <React.Fragment key={i}>
        { link.to &&
          <LinkItem
            size={lang === 'en' ? 'small' : 'normal'}
            type={link.type}
            onClick={onClickLink}
            to={link.to}>{ link.title }</LinkItem>
        }
        {
          link.href &&
          <LinkItem
            as="a"
            type={link.type}
            href={link.href}
            target="_blank">{ link.title }</LinkItem>
        }
        </React.Fragment>
      ) }
    </List>
  )
}

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${respondTo.md} {
    display: flex;
    flex-wrap: wrap;
  }
`

const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 4px 0px;
  height: 100%;
  line-height: 1;
  font-size: ${({ size }) => size === 'small' ? 12 : 16}px;
  transition: all .3s ease, font-size 0s;
  ${fontFamily};
  & + a {
    margin-left: 30px;
  }
  ${respondTo.md} {
    display: block;
    margin: 0;
    margin-bottom: 48px;
    height: auto;
    font-size: 22px;
    width: 32%;
    text-align: center;
    &:first-child {
      display: none;
    }
    & + a {
      margin: 0;
      margin-bottom: 48px;
    }

  }

  ${({ show }) => show === 'desktop' && css`
    display: none;
  `}

  ${ respondTo.md } {
    display: block;
    ${({ show }) => show === 'desktop' && css`
      display: block;
    `}
  }
`

export default LinksList;