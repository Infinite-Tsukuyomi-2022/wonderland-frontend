import styled from 'styled-components';
import { respondTo } from '../../utils/responsive';

const Container = styled.div`
  width: 1156px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  ${respondTo.lg} {
    padding: 0 72px;
  }
  ${respondTo.md} {
    padding: 0 24px;
  }
`

export const UnlimitContainer = styled.div`
  max-width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  ${respondTo.xl} {
    padding: 0 24px;
  }
  ${respondTo.lg} {
    padding: 0 72px;
  }
  ${respondTo.md} {
    padding: 0 24px;
  }
`


export default Container;