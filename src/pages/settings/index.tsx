import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { useModal } from '@hooks';
import { getServerSideUserProps } from '@utils';
import { Typography } from '@components';
import { NavBar } from '@components';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { useMutation } from '@tanstack/react-query';
import { postWithdraw } from '@api';
import { AxiosError } from 'axios';
import { LYL_VERSION } from '@static';
import { useToast } from '@hooks';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 72vh;
`;

const InfoButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 78px;
  padding: 28px;
  border-bottom: 1px solid ${({ theme }) => theme.colorGray.blueGray600};
`;

const SecessionButton = styled.button`
  width: 100%;
  height: 54px;
  border: 1px solid ${({ theme }) => theme.colorGray.blueGray400};
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colorGray.blueGray400};
  z-index: 2;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ServiceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ServiceInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  text-align: center;
  margin-top: 36px;
`;

export default function SettingsPage() {
  const router = useRouter();
  const [userState, setUserState] = useRecoilState(userAtom);
  const [selectedInfo, setSelectedInfo] = useState('');
  const { showToast } = useToast();

  const handleInfoBtn = (infoName: string) => {
    setSelectedInfo(infoName);
  };

  const handleBack = () => {
    if (selectedInfo) {
      setSelectedInfo('');
    } else {
      router.back();
    }
  };

  const { mutate } = useMutation<void, AxiosError>({
    mutationFn: postWithdraw,
    onSuccess: () => {
      router.push('/');
    },
    onError: () => {
      showToast('탈퇴 중 에러가 발생하였습니다.');
    },
  });

  const { open, close } = useModal();
  const setSecession = () => {
    mutate();
    close();
  };

  const handleSecessionBtn = () => {
    open({
      content: (
        <div style={{ textAlign: 'center' }}>
          정말 탈퇴하시겠어요?
          <br />
          모든 명함과 정보가 삭제됩니다.
        </div>
      ),
      buttonType: 'twoButton',
      buttonTitle: '탈퇴',
      onClick: setSecession,
      onClose: close,
    });
  };

  const content = `
  서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 서비스 소개 글 
  `;

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar title={selectedInfo || '환경설정'} leadingButton="back" onClickLeft={handleBack} />
      {!selectedInfo && (
        <>
          <InfoButton onClick={() => handleInfoBtn('회원 정보')}>
            <Typography grayColor="white" type="body5">
              회원 정보
            </Typography>
            <IconImage src="icons/CaretRight_24px.svg" />
          </InfoButton>
          <InfoButton onClick={() => handleInfoBtn('서비스 정보')}>
            <Typography grayColor="white" type="body5">
              서비스 정보
            </Typography>
            <IconImage src="icons/CaretRight_24px.svg" />
          </InfoButton>
        </>
      )}
      {selectedInfo === '회원 정보' && (
        <>
          <InfoContainer>
            <InfoButton>
              <Typography grayColor="white" type="body5">
                {userState.email}
              </Typography>
              <IconImage src={`icons/${userState.oauthServerType.toLowerCase()}_mini.svg`} />
            </InfoButton>
            <SecessionButton onClick={handleSecessionBtn}>탈퇴하기</SecessionButton>
          </InfoContainer>
        </>
      )}
      {selectedInfo === '서비스 정보' && (
        <>
          <InfoContainer>
            <ServiceContainer>
              <Typography type="title2" grayColor="white">
                LYL은 이렇게
                <br />
                만들어졌어요.
              </Typography>
              <Typography type="body7" grayColor="white">
                {content}
              </Typography>
            </ServiceContainer>
            <ServiceInfoContainer>
              <ServiceInfoContent>
                <Typography type="body3" grayColor="blueGray300">
                  제작
                </Typography>
                <Typography type="body4" grayColor="white">
                  팀하이볼
                </Typography>
              </ServiceInfoContent>
              <ServiceInfoContent>
                <Typography type="body3" grayColor="blueGray300">
                  버전
                </Typography>
                <Typography type="body4" grayColor="white">
                  Ver_{LYL_VERSION}
                </Typography>
              </ServiceInfoContent>
            </ServiceInfoContainer>
          </InfoContainer>
          <RightContainer>
            <Typography type="body7" grayColor="blueGray400">
              @2024, Link Your Link. All right reserved.
            </Typography>
          </RightContainer>
        </>
      )}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
