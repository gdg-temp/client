import { getServerSideUserProps } from '@utils';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CardLink, DefaultCardInfo, ReasonTexts, ReasonType } from '@types';
import { NavBar, Typography } from '@components';
import { DefaultFooter, DefaultTemplate, ReasonTemplate } from '@templates';
import { InferGetServerSidePropsType } from 'next';

type GenerateStep = 'default' | 'reason' | 'style' | 'confirm';

export default function GenerationPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [userState, setUserState] = useRecoilState(userAtom);
  const [generateStep, setGenerateStep] = useState<GenerateStep>('default');
  const [cardLinks, setCardLinks] = useState<CardLink[]>([
    { linkText: '', linkType: 'custom', linkUrl: '' },
  ]);
  const [reasonTexts, setReasonTexts] = useState<{ [key in ReasonType]: boolean }>({
    share: false,
    image: false,
    contact: false,
    introduce: false,
    coworker: false,
    communication: false,
    nothing: false,
  });
  const [cardInfo, setCardInfo] = useState<DefaultCardInfo>({
    name: userState.name,
    email: userState.email,
    introduction: '',
    companyName: '',
    position: '',
    profileImage: '',
    styleTemplate: 'default',
    designTemplate: 0,
  });
  const router = useRouter();

  const handleClickBack = () => {
    if (generateStep === 'default') router.push('/cards');
    if (generateStep === 'reason') setGenerateStep('default');
    if (generateStep === 'style') setGenerateStep('reason');
    if (generateStep === 'confirm') setGenerateStep('style');
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
    if (generateStep === 'reason') {
      return (
        <Typography grayColor="white" type="title2">
          명함을 어떤 용도로
          <br />
          사용하고 싶으신가요?
        </Typography>
      );
    }
    if (generateStep === 'style') {
      return (
        <Typography grayColor="white" type="title2">
          {cardInfo.name}님을 표현하는
          <br />
          스타일을 골라보세요!
        </Typography>
      );
    }
    if (generateStep === 'confirm') {
      return <></>;
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

  const changeReasonTexts = (reasonKey: ReasonType, isActive: boolean) => {
    const activeCount = Object.values(reasonTexts).reduce((acc, cur) => {
      return cur ? acc + 1 : acc;
    }, 0);
    if (activeCount >= 3 && isActive === true) return;
    setReasonTexts((prev) => {
      const newObj = { ...prev };
      newObj[reasonKey] = isActive;
      return newObj;
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
              onConfirm={() => setGenerateStep('reason')}
              isNew={true}
              disabled={!cardInfo.name || !cardInfo.email}
            />
          </>
        );
      case 'reason':
        return (
          <>
            <ReasonTemplate
              reasonTexts={reasonTexts}
              changeReasonTexts={changeReasonTexts}
              onPrev={() => setGenerateStep('default')}
              onNext={() => setGenerateStep('style')}
            />
          </>
        );
      case 'style':
        return <></>;
      case 'confirm':
        return <></>;

      default:
        break;
    }
  };
  return (
    <>
      <NavBar onClickLeft={handleClickBack} />
      {getHeaderText()}
      {getTemplate()}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
