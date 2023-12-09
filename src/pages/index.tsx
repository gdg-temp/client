import Head from 'next/head';
import { useState, useEffect } from 'react';

import { getServerSideUserProps } from '@utils';
import styled, { keyframes } from 'styled-components';
import { Button } from '@components';
import { useRouter } from 'next/router';

const HomeWrapper = styled.div`
  padding: 60px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 50vw;
      background: linear-gradient(to left, transparent, black);
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 50vw;
      background: linear-gradient(to right, transparent, black);
      z-index: 1;
    }
    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }
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

const cardImages = [
  'card1.png',
  'card2.png',
  'card3.png',
  'card4.png',
  'card5.png',
  'card6.png',
  'card7.png',
];

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const SlideContainer = styled.div`
  position: absolute;
  top: 54%;
  display: flex;
  width: 100%;
  animation: ${slide} 10s linear infinite;
  @media screen and (min-width: 768px) {
    top: 50%;
    animation: ${slide} 30s linear infinite;
  }
`;

const CardImageWrapper = styled.img`
  margin-right: 16px;
  width: 234.23px;
  height: 130.7px;
  @media screen and (min-width: 768px) {
    width: 319px;
    height: 178px;
  }
`;

export default function HomePage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <>
      <Head>
        <title>Link Your Link</title>
      </Head>
      <HomeWrapper>
        <LogoTextWrapper>링크로 공유하는 내 명함</LogoTextWrapper>
        <Logo src="/logo-vertical.svg" alt={'logo'} />
        <SlideContainer>
          {cardImages.map((cardImage, index) => (
            <CardImageWrapper
              key={index + cardImages.length}
              src={isMobile ? `/landing/mobile/${cardImage}` : `/landing/web/${cardImage}`}
              alt={`Card ${index + cardImages.length + 1}`}
            />
          ))}
          {cardImages.map((cardImage, index) => (
            <CardImageWrapper
              key={index + cardImages.length * 2}
              src={isMobile ? `/landing/mobile/${cardImage}` : `/landing/web/${cardImage}`}
              alt={`Card ${index + cardImages.length * 2 + 1}`}
            />
          ))}
        </SlideContainer>
        <Button color="primary" size="large" onClick={() => router.push('/login')}>
          로그인
        </Button>
      </HomeWrapper>
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
