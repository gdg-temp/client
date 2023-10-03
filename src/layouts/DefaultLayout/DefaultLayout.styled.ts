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

export default { DefaultLayoutWrapper };
