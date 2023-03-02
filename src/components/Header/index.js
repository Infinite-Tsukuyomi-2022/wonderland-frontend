import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import LinksList from './LinksList';
import SocialList from './SocialList';
// import LinksListMobile from './LinksListMobile';
import ConnectButton from './ConnectButton';
import LanguageButton from './LanguageButton';
import { respondTo } from '../../utils/responsive';
import { colors } from '../../constants/colors';
import MenuBurgerButton from '../MenuBurgerButton';
import { _wl } from '../../utils/useWording';
import { fontFamily } from '../Typography';

const Header = () => {
  const wording = _wl('header');

  const headerRef = useRef(null);
  const fixederRef = useRef();
  
  const prevPageYOffset = useRef(0);
  const navbarTop = useRef(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMenuOpenRef = useRef(false);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);    
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [])

  function handleWindowScroll() {
    if (!isMenuOpenRef.current) {
      const pageYOffset = Math.max(window.pageYOffset, 0);
      const delta = pageYOffset - prevPageYOffset.current;
      navbarTop.current = navbarTop.current - delta;
      navbarTop.current = Math.max(navbarTop.current, -160);

      if (delta < 0) navbarTop.current = 0;
      fixederRef.current.style.setProperty('transition-duration', (delta < 0) ? '0.3s': '0s');
      fixederRef.current.style.setProperty('transform', `translateY(${navbarTop.current}px)`);

      prevPageYOffset.current = pageYOffset;
    }
  }

  function handleClickMenuButton() {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpenRef.current = !isMenuOpen;
  }

  function handleClickLink() {
    setIsMenuOpen(false);
    isMenuOpenRef.current = false;
  }

  return (
    <Root ref={headerRef}>
      <Fixeder transparent={isMenuOpen} ref={fixederRef}>
        <Wrapper>
          {/* <Link className="logo" to="/"> */}
          <a className="logo" href={wording.logoLink}>
            <img src={wording.logo} alt={wording.logo_alt} />
          </a>
          {/* </Link> */}
          <div className="main">
            <MenuWrapper open={isMenuOpen}>
              <LinksList className="link-list" data={wording.links} onClickLink={handleClickLink} />
              <SocialList className="social-list" data={wording.socials} />
              <ConnectButton className="connect-button" />
              <a className="email" href={`mailto:${wording.email}`}>
                <img src="/images/footer-email.svg" alt="" />
                <span>{wording.email}</span>
              </a>
              <div className="copyright">{ wording.copyright }</div>
              <LanguageButton className="lang-button" />
            </MenuWrapper>
            <Buttonbar>
              <SocialList className="social-list" data={wording.socials} />
              <ConnectButton />
              <MenuBurgerButton open={isMenuOpen} onClick={handleClickMenuButton} />
              <LanguageButton className="lang-button" />
            </Buttonbar>
          </div>
        </Wrapper>
      </Fixeder>
    </Root>
  )
}

const Root = styled.header`
  padding-top: 50px;
  ${respondTo.lg} {
    padding-top: 55px;
  }
`

const Fixeder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px 12px;
  width: 100%;
  height: 50px;
  z-index: 5;
  box-sizing: border-box;
  background-color: ${colors.white};
  transition: transform .3s ease, background .3s ease;
  ${respondTo.lg} {
    padding: 0;
    height: 55px;
    ${({ transparent }) => transparent && css`background: transparent;`};
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
  ${respondTo.lg} {
    padding: 0 20px;
  }
  .logo {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 8px;
    width: 130px;
    padding-top: 14px;
    padding-bottom: 10px;
    z-index: 3;
    box-sizing: border-box;
    ${respondTo.lg} {
      width: 120px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .main {
    display: flex;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
  ${ respondTo.lg } {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    padding: 0;
    margin: 0;
    padding-top: 20vh;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    z-index: 2;
    background-color: hsla(160,84%,80%,0.5);
    backdrop-filter: blur(10px);
    transform: translateX(100%);
    transition: all .3s ease;
    box-sizing: border-box;
    ${({open}) => open && css`transform: translateX(0%);`}
  }
  .social-list {
    display: none;
    margin-top: 36px;
    > li + li {
      margin-left: 32px;
    }
    ${respondTo.lg} {
      display: flex;
    }
  }
  .bottom {
    display: none;
    width: 240px;
    margin: 0 auto;
    margin-top: 60px;
    ${respondTo.lg} {
      display: block;
    }
  }
  .connect-button {
    display: none;
    ${respondTo.lg} {
      display: flex;
      margin-top: 60px;
    }
  }
  .lang-button {
    display: none;
    ${respondTo.lg} {
      display: flex;
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .email {
    display: none;
    ${respondTo.lg} {
      display: flex;
      margin-top: 50px;
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
  .copyright {
    display: none;
    color: ${colors.lightBlue};
    text-align: center;
    font-size: 16px;
    ${fontFamily};
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 40px;
    ${respondTo.lg} {
      display: block;
    }
  }
`
const Buttonbar = styled.div`
  display: flex;
  align-items: center;
  ${respondTo.lg} {
    padding-right: 12px;
  }
  > *:last-child {
    margin-left: 12px;
    z-index: 3;
  }
  .social-list {
    margin-right: 12px;
    ${respondTo.lg} {
      display: none;
    }
  }
  .lang-button {
    ${respondTo.lg} {
      display: none;
    }
  }
`

export default Header;
