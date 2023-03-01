import { createGlobalStyle } from 'styled-components';
import { colors } from '../../constants/colors';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GenSekiGothic-H';
        src: url('/fonts/GenSekiGothic-H.ttc');
    }
    @font-face {
        font-family: 'GenSekiGothic-B';
        src: url('/fonts/GenSekiGothic-B.ttc');
    }
    @font-face {
        font-family: 'GenSekiGothic-M';
        src: url('/fonts/GenSekiGothic-M.ttc');
    }
    /* @font-face {
        font-family: 'GenSekiGothic';
        src: url('/fonts/GenSekiGothic-B.ttc');
        font-weight: 600;
    }
    @font-face {
        font-family: 'GenSekiGothic';
        src: url('/fonts/GenSekiGothic-M.ttc');
        font-weight: 500;
    } */

    body {
        margin: 0;
        line-height: 1.5;
        background: ${colors.white};
    }
    #app {
        display: flex;
        flex-direction: column;
    }
    ul {
        padding-inline-start: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        list-style-type: none;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        color: currentColor;
    }
    button {
        outline: none;
        cursor: pointer;
    }
    dd {
        margin-inline-start: 0;
    }
    p {
        padding: 0;
        margin: 0;
    }

`

export default GlobalStyle;
