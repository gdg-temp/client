import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/PretendardVariable.woff2') format('woff2'),
            url('/fonts/PretendardVariable.ttf') format("truetype");
        font-display: swap;
    }
  * {
    box-sizing: border-box;
  }
  body {  
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
    font-weight: 400;
    color: ${({ theme }) => theme.colorGray.white};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      background-color: ${({ theme }) => theme.colorGray.blueGray700};
      background-image: url("/bg-line.svg");
      background-repeat: no-repeat;
      background-position: center 0;
      background-size: 1177.8px 1052px;
    }
  }
  a { color: #fff; text-decoration: none; outline: none; font-family: 'Pretendard'; }
  button{ outline: none; background: none; border: none; cursor: pointer; font-family: 'Pretendard';};
  input { border: none; outline:  none; font-family: 'Pretendard';};
`;

export default GlobalStyles;
