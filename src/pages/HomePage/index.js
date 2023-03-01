import React from 'react';
import styled from 'styled-components';
import HeadingSection from './HeadingSection';
import EmpowerSection from './EmpowerSection';
import MintSection from './MintSection';
import DesignSection from './DesignSection';
import RoadmapSection from './RoadmapSection';
import PartnerSection from './PartnerSection';
import QASection from './QASection';
import FooterSection from './FooterSection';

const HomePage = () => {
  return (
    <Root>
      <Background />
      <FrontLayout>
        <HeadingSection id="heading" />
        <EmpowerSection id="empower" />
        <MintSection id="mint" />
        <DesignSection id="design" />
        <RoadmapSection id="roadmap" />
        <PartnerSection id="partner" />
        <QASection id="qa" />
        <FooterSection />
      </FrontLayout>
    </Root>
  )
};

const Root = styled.div`
  position: relative;
  background-image: linear-gradient(0deg, #FFE4D3, #0090A9);
  overflow: hidden;
`
const FrontLayout = styled.div`
  position: relative;
  z-index: 1;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/background.png');
  background-size: 100% 100%;
  filter: blur(24px);
  z-index: 0;
`

export default HomePage;