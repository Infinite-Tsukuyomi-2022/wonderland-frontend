import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HrLine } from '../../components/Common';
import Container from '../../components/Container';
import { Subtitle, Text, Title } from '../../components/Typography';
import { _wl } from '../../utils/useWording';


const EmpowerSection = ({...props}) => {
  const wording = _wl('homepage.empower');

  return (
    <Root {...props}>
      <Container>
        <Title className="title">{ wording.title }</Title>
        <Subtitle className="subtitle">{ wording.subtitle }</Subtitle>
        <Text>{ wording.content }</Text>
        <HrLine />
      </Container>
    </Root>
  )
};

const Root = styled.div`
  .title {
    margin-bottom: 8px;
  }
  .subtitle {
    margin-bottom: 24px;
  }
`

export default EmpowerSection;