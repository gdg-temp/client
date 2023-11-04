import Head from 'next/head';

import { getServerSideUserProps } from '@utils';
import styled from 'styled-components';
import { Button } from '@components';
import { useRouter } from 'next/router';

const HomeWrapper = styled.div`
  padding: 60px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 181px;
  height: auto;
  margin-bottom: 300px;
  @media screen and (min-width: 768px) {
    width: 120px;
    margin-bottom: 260px;
  }
`;

const LogoTextWrapper = styled.div`
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colorGray.white} @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const CardImageWrapper = styled.img`
  position: absolute;
  z-index: 1;
  top: 340px;
  width: 380px;
  height: 401px;
`;

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Link Your Link</title>
      </Head>
      <HomeWrapper>
        <LogoTextWrapper>링크로 공유하는 내 명함</LogoTextWrapper>
        <Logo src="/logo-vertical.svg" alt={'logo'} />
        <CardImageWrapper src={'/landing/splash-card.svg'} alt={'Splash Card Image'} />
        <Button color="primary" size="large" onClick={() => router.push('/login')}>
          로그인
        </Button>
      </HomeWrapper>
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
