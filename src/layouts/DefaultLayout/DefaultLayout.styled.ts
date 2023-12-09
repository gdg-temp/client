import styled from 'styled-components';

const DefaultLayoutWrapper = styled.div`
  position: relative;
  padding: 44px 28px 56px;
  background-color: ${({ theme }) => theme.colorGray.black};
  min-height: 100vh;
  // 데스크탑
  @media screen and (min-width: 768px) {
    padding: 44px 30px 56px;
    width: 440px;
  }
`;

const LoginLayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorGray.black};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: -16vw 168px;
  background-size: 160vw auto;
  background-image: url('/bg-line-color.svg');
  // 데스크탑
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 100vw;
    background-position: center 64px;
    background-size: 1177.8px auto;
  }
  @media screen and (min-width: 1920px) {
    background-size: calc(100vw * 0.65) auto;
  }
`;

export default { DefaultLayoutWrapper, LoginLayoutWrapper };
