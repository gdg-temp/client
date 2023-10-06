import { getServerSideUserProps } from '@utils';
import styled from 'styled-components';
import { Typography } from '@components';

const LoginWrapper = styled.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 92px 28px;
  // 데스크탑
  @media screen and (min-width: 768px) {
    margin-top: 160px;
    height: 569px;
  }
`;

const Logo = styled.img`
  width: 181px;
  height: auto;
  margin-bottom: 174px;
  // 데스크탑
  @media screen and (min-width: 768px) {
    width: 120px;
    margin-bottom: 64px;
  }
`;

const LoginTextWrapper = styled.div`
  display: none;
  // 데스크탑
  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    display: block;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StartButtonLink = styled.a<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
`;

const StartButtonIcon = styled.img`
  margin-bottom: 2px;
  margin-right: 12px;
`;

export default function LoginPage() {
  return (
    <LoginWrapper>
      <Logo src={'/logo-vertical.svg'} alt={'LYL Vertical logo'} />
      <LoginTextWrapper>
        <Typography type="title1" grayColor="white">
          로그인하기
        </Typography>
      </LoginTextWrapper>
      <ButtonWrapper>
        <StartButtonLink backgroundColor="#FFCC01">
          <StartButtonIcon src={'/login/kakao.svg'} />
          <Typography type="body3" grayColor="black">
            카카오톡으로 시작하기
          </Typography>
        </StartButtonLink>
        <StartButtonLink backgroundColor="#5AC451">
          <StartButtonIcon src={'/login/naver.svg'} />
          <Typography type="body3" grayColor="white">
            네이버로 시작하기
          </Typography>
        </StartButtonLink>
        <StartButtonLink backgroundColor="#FFFFFF">
          <StartButtonIcon src={'/login/google.svg'} />
          <Typography type="body3" grayColor="black">
            구글로 시작하기
          </Typography>
        </StartButtonLink>
      </ButtonWrapper>
    </LoginWrapper>
  );
}

export const getServerSideProps = getServerSideUserProps;
