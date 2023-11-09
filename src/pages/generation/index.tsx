import { getServerSideUserProps } from '@utils';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CardLink, DefaultCardInfo, ReasonTexts } from '@types';
import { NavBar, Typography } from '@components';

type GenerateStep = 'default' | 'reason' | 'style' | 'confirm';

export default function GenerationPage() {
  const [userState, setUserState] = useRecoilState(userAtom);
  const [generateStep, setGenerateStep] = useState<GenerateStep>('default');
  const [cardLinks, setCardLinks] = useState<CardLink[]>([]);
  const [reasonTexts, setReasonTexts] = useState<ReasonTexts>([]);
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
  useEffect(() => {
    if (!userState.email) router.push('/login');
  }, [router, userState]);
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

  const changeReasonTexts = (arr: ReasonTexts) => {
    setReasonTexts(arr);
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
  return (
    <>
      <NavBar onClickLeft={handleClickBack} />
      {getHeaderText()}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
