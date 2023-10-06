import styled from 'styled-components';

const DefaultLayoutWrapper = styled.div`
  padding: 44px 28px 56px;
  background-color: ${({ theme }) => theme.colorGray.black};
  min-height: 100vh;
  // 데스크탑
  @media screen and (min-width: 768px) {
    padding: 82px 30px 56px;
    width: 440px;
  }
`;

const LandingLayoutWrapper = styled.div`
  padding: 44px 28px 56px;
  background-color: ${({ theme }) => theme.colorGray.black};
  min-height: 100vh;
  // 데스크탑
  @media screen and (min-width: 768px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    background-image: url('/bg-line-color.svg');
    background-repeat: no-repeat;
    background-position: center 64px;
    background-size: 1177.8px auto;
  }
  @media screen and (min-width: 1920px) {
    background-size: calc(100vw * 0.65) auto;
  }
`;

const LoginLayoutWrapper = styled.div`
  padding: 44px 28px 56px;
  background-color: ${({ theme }) => theme.colorGray.black};
  min-height: 100vh;
  // 데스크탑
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    background-image: url('/bg-line-color.svg');
    background-repeat: no-repeat;
    background-position: center 64px;
    background-size: 1177.8px auto;
  }
  @media screen and (min-width: 1920px) {
    background-size: calc(100vw * 0.65) auto;
  }
`;

export default { DefaultLayoutWrapper, LandingLayoutWrapper, LoginLayoutWrapper };
