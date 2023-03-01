import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialList from './SocialList';
import { respondTo } from '../../utils/responsive';
import { colors } from '../../constants/colors';
import { _w } from '../../utils/wordingSystem';

const Footer = () => {
  const wording = _w('footer');

  return (
    <Root>
      <Wrapper>
        <Link className="logo" to="/">
          <img src={wording.logo} alt={wording.logo_alt} />
        </Link>
        <SocialList className="social-list" data={wording.socials} />
      </Wrapper>
      <Copyright>
        <a href="https://raritysniper.com/nft-drops-calendar" target="_blank">NFT Drops</a> | <Link to={wording.terms.to} >{ wording.terms.title }</Link> | { wording.copyright }
      </Copyright>
    </Root>
  )
}

const Root = styled.footer`
  padding: 24px 0;
  background-color: ${colors.lightBlue};
  ${respondTo.md} {
    padding: 12px 0;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
  max-width: 100%;
  height: 100%;
  transition: all .3s ease ${({time}) => time}ms;
  box-sizing: border-box;
  ${respondTo.md} {
    flex-direction: column-reverse;
  }
  .logo {
    position: relative;
    display: flex;
    align-items: center;
    width: 125px;
    z-index: 1;
    ${respondTo.md} {
      width: 92px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .social-list {
    ${respondTo.md} {
      display: none;
    }
  }
`

const Copyright = styled.div`
  margin-top: 12px;
  text-align: center;
  font-size: 12px;
  color: ${colors.blue};
`

export default Footer;
