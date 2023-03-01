import styled from "styled-components";
import { colors } from "../../constants/colors";
import { respondTo } from "../../utils/responsive";

const fontFamilyBlack = "font-family: 'Roboto Slab', 'GenSekiGothic-H', sans-serif;";
const fontFamilyBold = "font-family: 'Roboto Slab', 'GenSekiGothic-B', sans-serif;";
const fontFamily = "font-family: 'Roboto Slab', 'GenSekiGothic-M', sans-serif;";

const Title = styled.div`
  font-size: 60px;
  color: ${colors.blue};
  letter-spacing: 0.5px;
  font-family: 'GenSekiGothic-H';
  text-align: center;
  ${respondTo.lg} {
    font-size: 35px;
    white-space: break-spaces;
  }
`
const Subtitle = styled.div`
  font-size: 30px;
  color: ${colors.blue};
  letter-spacing: 0.4px;
  font-weight: 600;
  text-align: center;
  font-family: 'GenSekiGothic-B';
  ${respondTo.lg} {
    font-size: 20px;
    white-space: break-spaces;
  }
`

const Text = styled.div`
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-family: 'Roboto Slab', 'GenSekiGothic-M', sans-serif;
  color: #2A3544;
  white-space: break-spaces;
  text-align: center;
  ${respondTo.lg} {
    font-size: 13.5px;
  }
`

export { fontFamilyBlack, fontFamilyBold, fontFamily, Title, Subtitle, Text };