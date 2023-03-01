import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import { _wl } from '../../utils/useWording';


const SlideInItem = ({children, ...props}) => {
  const rootRef = useRef(null);
  const [ isActive, setIsActive ] = useState(false);

  useIntersectionObserver(rootRef, handleIntersection, {
    root: null,
    rootMargin: '0px 0px',
    threshold: 0
  })

  function handleIntersection(e) {
    if (e[0].isIntersecting) {
      setIsActive(true);
    }
  }

  return (
    <Root active={isActive} ref={rootRef} {...props}>
      { children }
    </Root>
  )
};



const Root = styled.div`
  opacity: 0;
  transition: all 1s ease;
  transform: translateY(100%);
  ${({ active }) => active && css`
    opacity: 1;
    transform: translateY(0);
  `}
`

export default SlideInItem;