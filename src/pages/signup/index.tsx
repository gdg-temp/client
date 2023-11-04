import { getServerSideUserProps } from '@utils';
import { useEffect, useState } from 'react';
import { AGREEMENT_TEXTS } from '@static';
import { AgreementContent, AgreementStep, ConfirmStep } from '@templates';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';

export type SectionTemplate = number | 'agreements' | 'confirm';

export default function SignUpPage() {
  const [userState, setUserState] = useRecoilState(userAtom);
  const router = useRouter();
  const [step, setStep] = useState<SectionTemplate>('agreements');
  const [agreements, setAgreements] = useState<boolean[]>(
    new Array(AGREEMENT_TEXTS.length).fill(false),
  );

  useEffect(() => {
    if (!userState.name) {
      router.push('/login');
    }
  }, [userState, router]);

  const handleClickAgree = (index: number, isCheck: boolean) => {
    setAgreements((prev) => {
      const newArr = [...prev];
      newArr[index] = isCheck;
      return newArr;
    });
  };

  const handleAllAgree = (isCheck: boolean) => {
    setAgreements(new Array(AGREEMENT_TEXTS.length).fill(isCheck));
  };

  const handleStep = (step: SectionTemplate) => {
    setStep(step);
  };

  if (typeof step === 'number') {
    return (
      <AgreementContent
        onClickAgreement={() => handleClickAgree(step, true)}
        onClickBack={() => handleStep('agreements')}
        step={step}
      />
    );
  } else if (step === 'agreements') {
    return (
      <AgreementStep
        agreements={agreements}
        onClickAgreement={handleClickAgree}
        onClickAgreementContent={handleStep}
        onClickAllAgreement={handleAllAgree}
        onClickNext={() => handleStep('confirm')}
      />
    );
  } else {
    return <ConfirmStep agreements={agreements} />;
  }
}

export const getServerSideProps = getServerSideUserProps;
