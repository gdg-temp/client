import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url('fonts/PretendardVariable.woff2') format('woff2');
        font-display: swap;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Pretendard' !important;
    }
`;

export default GlobalStyles;
