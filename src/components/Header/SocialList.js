import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../utils/responsive';
import SocialItem from '../SocialItem';

const SocialsList = ({ data, onLinkClick, ...props }) => {
  return (
    <List {...props}>
      { data.map((item, i) =>
        <Item key={i}>
          <SocialItem icon={item.icon} href={item.link} target="_blank" />
        </Item>
      ) }
    </List>
  )
}

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  & + li {
    margin-left: 20px;
    ${respondTo.md} {
      /* margin-left: 16px; */
    }
  }
`

export default SocialsList;