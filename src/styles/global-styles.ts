import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {  
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colorGray.white};
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
  a { color: #fff; text-decoration: none; outline: none }
  button{ outline: none; background: none; border: none; cursor: pointer; };
  input { border: none; outline:  none; };
`;

export default GlobalStyles;
