import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { HrLine } from '../../components/Common';
import Container from '../../components/Container';
import { fontFamily, Subtitle, Text, Title } from '../../components/Typography';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _wl } from '../../utils/useWording';


const FooterSection = () => {
  const wording = _wl('homepage.footer');
  const { lang } = useSelector(state => state.language);

  return (
    <Root>
      <Wrapper>
        <Logo>
          <a href={wording.logoLink}>
            <img src="/images/footer-logo.png" alt="" style={{width:"288px", height:"auto"}} />
          </a>
        </Logo>
        <Content>
          <div className="links">
            { wording.links.map((link, i) =>
              <LinkItem
              key={i}
              size={lang === 'en' ? 'small' : 'normal'}
              type={link.type}
              to={link.to}>{ link.title }</LinkItem>
            ) }
          </div>
          <div className="bottom">
            <a className="email" href={`mailto:${wording.email}`}>
              <img src="/images/footer-email.svg" alt="" />
              <span>{wording.email}</span>
            </a>
            <img className="logo" src="/images/footer-logo.png" alt="" style={{width:"288px", height:"auto"}} />
            <p className="copyright">{ wording.copyright }</p>
          </div>
        </Content>
      </Wrapper>
    </Root>
  )
};

const Root = styled.div`
  padding: 100px 0;
  ${respondTo.md} {
    padding: 80px 0 40px;
  }
`

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  width: 288px;
  ${respondTo.md} {
    display: none;
  }
  .img {
    display: block;
    width: 100%;
    height: auto;
  }

`
const Content = styled.div`
  .links {
    display: flex;
    margin-bottom: 24px;
    ${respondTo.md} {
      flex-wrap: wrap;
      width: 100%;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    ${fontFamily};
    ${respondTo.md} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .logo {
      display: none;
      ${respondTo.md} {
        display: block;
        margin-bottom: 40px;
        max-width: 80%;
      }
    }
    .email {
      display: flex;
      font-weight: 600;
      letter-spacing: 0.8px;
      color: #273545;
      ${respondTo.md} {
        margin-bottom: 45px;
      }
      img {
        margin-right: 4px;
        ${respondTo.md} {
          width: 30px;
        }
        ${respondTo.md} {
          width: 100%;
          height: auto;
        }
      }
    }
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
  font-size: ${({ size }) => size === 'small' ? 14 : 16}px;
  ${fontFamily};
  transition: all .3s ease;
  & + a {
    margin-left: 38px;
    ${respondTo.md} {
      margin: 0;
      margin-bottom: 40px;
    }
  }
  ${({ type }) => type === 1 && css`
  background: rgba(194, 224, 236, .5);
  color: ${colors.blue};
  &:hover {
    border: 1px solid ${colors.blue};
  }
  `}
  ${({ type }) => type === 2 && css`
    color: ${colors.white};
    background: rgba(105, 167, 202, 0.6);
  `}
  ${respondTo.md} {
    width: 32%;
    padding: 0;
    text-align: center;
    margin-bottom: 40px;
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

export default FooterSection;