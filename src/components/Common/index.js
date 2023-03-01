import styled, { keyframes } from "styled-components";
import { colors } from "../../constants/colors";
import { respondTo } from "../../utils/responsive";

const HrLine = styled.hr`
  position: relative;
  margin: 40px 0;
  border: 0;
  height: 2px;
  background: ${colors.lineColor};
  background: repeating-linear-gradient(90deg, ${colors.lineColor}, ${colors.lineColor} 8px,transparent 8px,transparent 16px);
  z-index: 1;
  ${respondTo.md} {
    margin: 28px 0;
  }
`

const CustomOrder = styled.ol`
  list-style: none;
  counter-reset: my-counter;
  li {
    position: relative;
    padding-left: 6px;
    counter-increment: my-counter;
    &::before {
      content: counter(my-counter);
      display: inline-block;
      position: absolute;
      top: 4px;
      right: 100%;
      border: 1px solid ${colors.gray};
      border-radius: 50%;
      width: 18px;
      height: 18px;
      text-align: center;
      font-size: 12px;
    }
    > .text {
      text-align: left;
    }
  }
`


const floatAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(4px + 2%));
  }
  100% {
    transform: translateY(0);
  }
`

export { HrLine, CustomOrder, floatAnimation };