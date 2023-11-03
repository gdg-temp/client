import { getServerSideUserProps } from '@utils';
import { useState } from 'react';
import { AGREEMENT_TEXTS } from '@static';
import { AgreementContent, AgreementStep, ConfirmStep } from '@templates';

export type SectionTemplate = number | 'agreements' | 'confirm';

export default function SignUpPage() {
  const [step, setStep] = useState<SectionTemplate>('agreements');
  const [agreements, setAgreements] = useState<boolean[]>(
    new Array(AGREEMENT_TEXTS.length).fill(false),
  );

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
    return <ConfirmStep />;
  }
}

export const getServerSideProps = getServerSideUserProps;
