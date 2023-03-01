import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import LanguageHelper from '../LanguageHelper';

const LanguageButton = ({ onButtonClick, ...props }) => {
  const { lang } = useSelector(state => state.language);
  const [ selectedLang, setSelectedLang ] = useState(null);
  const { pathname } = useLocation();

  function handleClickLink(e) {
    const lang = e.currentTarget.dataset.lang;
    setSelectedLang(lang);
    onButtonClick && onButtonClick();
  }
  
  function getCurrentPathName() {
    let currentPathname =(' ' + pathname).slice(1);
    if (currentPathname.includes('/en')) {
      return currentPathname;
    }
    else {
      return `/en${pathname}`
    }
  }

  function getCurrentZhPathname() {
    let currentPathname =(' ' + pathname).slice(1);
    return currentPathname.replace('/en', '');
  }
  
  return (
    <Root {...props}>
      { selectedLang &&
        <LanguageHelper selectedLang={selectedLang} />
      }
      <LinkItem active={lang === 'zh-TW'} data-lang="zh-TW" to={getCurrentZhPathname()} onClick={handleClickLink}>中</LinkItem>
      |
      <LinkItem active={lang === 'en'} data-lang="en" to={getCurrentPathName()} onClick={handleClickLink}>E</LinkItem>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
`

const LinkItem = styled(Link)`
  display: block;
  padding: 0 12px;
  font-size: 12px;
  box-sizing: border-box;
  transition: all .3s ease;
  ${respondTo.md} {
    height: 22px;
  }
  &:hover {
    color: ${colors.blue};
  }
  ${({ active }) => active && css`
    color: ${colors.blue};
  `}
`

export default LanguageButton;