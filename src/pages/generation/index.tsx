import { getServerSideUserProps } from '@utils';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Card, CardLink, DefaultCardInfo, ReasonType } from '@types';
import { NavBar, Typography } from '@components';
import {
  ConfirmTemplate,
  DefaultFooter,
  DefaultTemplate,
  DesignTemplate,
  ReasonTemplate,
  StyleTemplate,
} from '@templates';
import { InferGetServerSidePropsType } from 'next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PostGenerationRequest, PostLinkRequest } from 'src/api/types';
import { postGeneration, postLink } from '@api';
import { KEY } from '@static';
import { REASON_TEXT } from 'src/static/reason';
import { useToast } from '@hooks';
import GenerationStyled from 'src/templates/generation/Generation.styled';

type GenerateStep = 'default' | 'style' | 'design' | 'confirm';

export default function GenerationPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const { mutateAsync: mutateGeneration } = useMutation<
    { data: Card },
    AxiosError,
    PostGenerationRequest
  >({
    mutationFn: postGeneration,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY.CARD] });
      queryClient.invalidateQueries({ queryKey: [KEY.CARDS] });
    },
    onError: () => {
      showToast('명함 생성 중 에러가 발생하였습니다.');
    },
  });
  const { mutateAsync: mutateLink } = useMutation<CardLink, AxiosError, PostLinkRequest>({
    mutationFn: postLink,
  });
  const [userState, setUserState] = useRecoilState(userAtom);
  const [generateStep, setGenerateStep] = useState<GenerateStep>('default');
  const [cardLinks, setCardLinks] = useState<CardLink[]>([
    { linkText: '', linkType: 'custom', linkUrl: '' },
  ]);
  const [cardInfo, setCardInfo] = useState<DefaultCardInfo>({
    name: userState.name,
    email: userState.email,
    introduction: '',
    companyName: '',
    position: '',
    profileImage: '',
    styleTemplate: 'default' as const,
    designTemplate: '1',
  });
  const router = useRouter();

  const handleConfirm = async () => {
    try {
      const cardResult = await mutateGeneration({
        ...cardInfo,
      });

      for await (const cardLink of cardLinks) {
        await mutateLink({ ...cardLink, encodeId: cardResult.data.encodeId });
      }
      showToast('새로운 명함이 추가되었습니다.');
      router.push('/cards');
    } catch (error) {
      showToast('명함 생성 중 오류가 발생하였습니다.');
    }
  };

  const handleClickBack = () => {
    if (generateStep === 'default') router.push('/cards');
    if (generateStep === 'style') setGenerateStep('default');
    if (generateStep === 'design') setGenerateStep('style');
    if (generateStep === 'confirm') setGenerateStep('design');
  };

  const getHeaderText = () => {
    if (generateStep === 'default') {
      return (
        <Typography grayColor="white" type="title2">
          명함에 들어갈
          <br />
          기본정보를 입력해주세요.
        </Typography>
      );
    }
    if (generateStep === 'style') {
      return (
        <Typography grayColor="white" type="title2">
          {cardInfo.name}님을 표현하는
          <br />
          <span style={{ color: '#EBD9FF' }}>스타일</span>을 골라보세요!
        </Typography>
      );
    }
    if (generateStep === 'design') {
      return (
        <Typography grayColor="white" type="title2">
          {cardInfo.name}님을 표현하는
          <br />
          <span style={{ color: '#EBD9FF' }}>디자인</span>을 골라보세요!
        </Typography>
      );
    }
    if (generateStep === 'confirm') {
      return (
        <GenerationStyled.ConfirmTitleWrapper>
          <Typography grayColor="blueGray100" type="caption1">
            새로운 명함이 탄생했어요!
          </Typography>
          <Typography grayColor="white" type="title1">
            이 명함으로
            <br />
            시작해볼까요?
          </Typography>
        </GenerationStyled.ConfirmTitleWrapper>
      );
    }
  };
  const changeCardInfo = (info: Partial<DefaultCardInfo>) => {
    setCardInfo((prev) => {
      return {
        ...prev,
        ...info,
      };
    });
  };

  const removeCardLinkByIndex = (index: number) => {
    setCardLinks((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };
  const addCardLink = () => {
    setCardLinks((prev) => [...prev, { linkText: '', linkType: 'custom', linkUrl: '' }]);
  };
  const changeCardLink = (index: number, obj: Partial<CardLink>) => {
    const prevObj = { ...cardLinks[index] };
    setCardLinks((prev) => [
      ...prev.slice(0, index),
      { ...prevObj, ...obj },
      ...prev.slice(index + 1),
    ]);
  };
  const getTemplate = () => {
    switch (generateStep) {
      case 'default':
        return (
          <>
            <DefaultTemplate
              cardInfo={cardInfo}
              cardLinks={cardLinks}
              changeCardInfo={changeCardInfo}
              removeCardLinkByIndex={removeCardLinkByIndex}
              addCardLink={addCardLink}
              changeCardLink={changeCardLink}
            />
            <DefaultFooter
              confirmText={'다음'}
              onConfirm={() => setGenerateStep('style')}
              isNew={true}
              disabled={!cardInfo.name || !cardInfo.email}
            />
          </>
        );
      case 'style':
        return (
          <>
            <StyleTemplate
              cardInfo={cardInfo}
              changeCardInfo={changeCardInfo}
              onPrev={() => setGenerateStep('default')}
              onNext={() => setGenerateStep('design')}
            />
          </>
        );
      case 'design':
        return (
          <>
            <DesignTemplate
              cardInfo={cardInfo}
              changeCardInfo={changeCardInfo}
              onPrev={() => setGenerateStep('style')}
              onNext={() => setGenerateStep('confirm')}
            />
          </>
        );
      case 'confirm':
        return (
          <>
            <ConfirmTemplate
              cardInfo={cardInfo}
              onReset={() => setGenerateStep('default')}
              onConfirm={handleConfirm}
            />
          </>
        );

      default:
        break;
    }
  };
  return (
    <GenerationStyled.GenerationPageWrapper>
      <NavBar onClickLeft={handleClickBack} />
      {getHeaderText()}
      {getTemplate()}
    </GenerationStyled.GenerationPageWrapper>
  );
}

export const getServerSideProps = getServerSideUserProps;
