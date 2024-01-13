import { getServerSideUserProps } from '@utils';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, CardLink, DefaultCardInfo } from '@types';
import { NavBar, Typography } from '@components';
import {
  ConfirmTemplate,
  DefaultFooter,
  DefaultTemplate,
  DesignTemplate,
  EditHeaderTab,
  ShowCardTemplate,
  StyleTemplate,
} from '@templates';
import { InferGetServerSidePropsType } from 'next';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  DeleteLinkRequest,
  PostLinkRequest,
  UpdateCardRequest,
  UpdateLinkRequest,
} from 'src/api/types';
import { getCard, postLink } from '@api';
import { KEY } from '@static';
import { useToast } from '@hooks';
import updateCard from 'src/api/updateCard';
import updateLink from 'src/api/updateLink';
import deleteLink from 'src/api/deleteLink';

type EditStep = 'infoEdit' | 'showCard' | 'styleEdit' | 'designEdit' | 'resultEdit';

export default function GenerationPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    query: { id },
    back,
    push,
  } = useRouter();
  const {
    data: cardData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [KEY.CARD, id],
    queryFn: () => getCard(id as string),
  });
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const { mutateAsync: mutateCard } = useMutation<Card, AxiosError, UpdateCardRequest>({
    mutationFn: updateCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY.CARD] });
      queryClient.invalidateQueries({ queryKey: [KEY.CARDS] });
    },
  });
  const { mutateAsync: mutateAddLink } = useMutation<CardLink, AxiosError, PostLinkRequest>({
    mutationFn: postLink,
  });
  const { mutateAsync: mutateUpdateLink } = useMutation<CardLink, AxiosError, UpdateLinkRequest>({
    mutationFn: updateLink,
  });
  const { mutateAsync: mutateDeleteLink } = useMutation<null, AxiosError, DeleteLinkRequest>({
    mutationFn: deleteLink,
  });
  const [userState, setUserState] = useRecoilState(userAtom);
  const [currentStep, setCurrentStep] = useState<EditStep>('infoEdit');
  const [cardLinks, setCardLinks] = useState<CardLink[]>([]);

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

  // cardData 로딩이 끝나면 초깃값 셋팅
  useEffect(() => {
    if (cardData) {
      setCardInfo(cardData.data);
      setCardLinks(cardData.data.LinkInfoVOList);
    }
  }, [cardData]);

  const handleConfirm = async () => {
    try {
      await mutateCard({
        encodedId: cardData?.data.encodeId ?? '',
        ...cardInfo,
      });
      cardLinks.forEach((cardLink) => {
        if (cardLink.id !== undefined) {
          mutateUpdateLink({ linkId: cardLink.id, ...cardLink });
        } else {
          mutateAddLink({ ...cardLink, encodedId: cardData?.data.encodeId as string });
        }
      });
      setCurrentStep('resultEdit');
    } catch (error) {
      showToast('명함 수정 중 오류가 발생하였습니다.');
    }
  };

  const handleClickBack = () => {
    back();
  };

  const changeCardInfo = (info: Partial<DefaultCardInfo>) => {
    setCardInfo((prev) => {
      return {
        ...prev,
        ...info,
      };
    });
  };

  const removeCardLinkByIndex = async (index: number) => {
    const linkId = cardLinks[index].id;
    try {
      if (linkId !== undefined) {
        await mutateDeleteLink({ linkId });
      }
      setCardLinks((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    } catch (error) {
      showToast('명함 삭제에 실패하였습니다.');
    }
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
  const getHeaderText = () => {
    if (currentStep === 'infoEdit') {
      return (
        <EditHeaderTab
          currentTab={currentStep}
          onClickInfoTab={() => setCurrentStep('infoEdit')}
          onClickStyleTab={() => setCurrentStep('showCard')}
        />
      );
    }
    if (currentStep === 'showCard') {
      return (
        <EditHeaderTab
          currentTab={currentStep}
          onClickInfoTab={() => setCurrentStep('infoEdit')}
          onClickStyleTab={() => setCurrentStep('showCard')}
        />
      );
    }
    if (currentStep === 'designEdit') {
      return (
        <Typography grayColor="white" type="title2">
          {cardInfo.name}님을 표현하는
          <br />
          <span style={{ color: '#EBD9FF' }}>스타일</span>을 골라보세요!
        </Typography>
      );
    }
    if (currentStep === 'styleEdit') {
      return (
        <Typography grayColor="white" type="title2">
          {cardInfo.name}님을 표현하는
          <br />
          <span style={{ color: '#EBD9FF' }}>디자인</span>을 골라보세요!
        </Typography>
      );
    }
    if (currentStep === 'resultEdit') {
      return (
        <>
          <Typography grayColor="white" type="title2">
            내 명함이
            <br />
            새롭게 바뀌었어요!
          </Typography>
        </>
      );
    }
  };
  const getTemplate = () => {
    switch (currentStep) {
      case 'infoEdit':
        return (
          <>
            <DefaultTemplate
              cardInfo={cardInfo}
              cardLinks={cardLinks}
              changeCardInfo={changeCardInfo}
              removeCardLinkByIndex={removeCardLinkByIndex}
              addCardLink={addCardLink}
              changeCardLink={changeCardLink}
              additionalInfo
            />
            <DefaultFooter
              confirmText={'수정완료'}
              onConfirm={handleConfirm}
              isNew={true}
              disabled={!cardInfo.name || !cardInfo.email}
            />
          </>
        );
      case 'showCard':
        return (
          <>
            <ShowCardTemplate cardInfo={cardInfo} onClickEdit={() => setCurrentStep('styleEdit')} />
          </>
        );
      case 'styleEdit':
        return (
          <>
            <StyleTemplate
              cardInfo={cardInfo}
              changeCardInfo={changeCardInfo}
              onPrev={() => setCurrentStep('showCard')}
              onNext={() => setCurrentStep('designEdit')}
            />
          </>
        );
      case 'designEdit':
        return (
          <>
            <DesignTemplate
              cardInfo={cardInfo}
              changeCardInfo={changeCardInfo}
              onPrev={() => setCurrentStep('styleEdit')}
              onNext={handleConfirm}
            />
          </>
        );
      case 'resultEdit':
        return (
          <>
            <ConfirmTemplate
              cardInfo={cardInfo}
              onReset={() => setCurrentStep('designEdit')}
              onConfirm={() => push('/cards')}
              mode="edit"
            />
          </>
        );
      default:
        break;
    }
  };
  return (
    <>
      <NavBar onClickLeft={handleClickBack} title="명함 수정하기" />
      {getHeaderText()}
      {getTemplate()}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
