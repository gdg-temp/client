import { Button, Checkbox, NavBar, Typography } from '@components';
import { AGREEMENT_TEXTS } from '@static';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import S from './Signup.styled';

interface AgreementStepProps {
  onClickAllAgreement: (isCheck: boolean) => void;
  onClickAgreement: (index: number, isCheck: boolean) => void;
  onClickNext: () => void;
  onClickAgreementContent: (index: number) => void;
  agreements: boolean[];
}

const AgreementStep = ({
  onClickAgreement,
  onClickAllAgreement,
  onClickNext,
  onClickAgreementContent,
  agreements,
}: AgreementStepProps) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isRequiredChecked, setIsRequiredChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let requiredChecked = true;
    let allChecked = true;
    agreements.forEach((agreement, i) => {
      // allChecked 검증
      if (!agreement) allChecked = false;
      // requiredChecked 검증
      if (AGREEMENT_TEXTS[i].required && !agreement) {
        requiredChecked = false;
      }
    });
    setIsAllChecked(allChecked);
    setIsRequiredChecked(requiredChecked);
  }, [agreements]);

  return (
    <>
      <NavBar onClickLeft={() => router.back()} />
      <Typography grayColor="white" type="title2">
        개인정보 활용
        <br />
        동의가 필요해요.
      </Typography>
      <Typography grayColor="blueGray300" type="body7">
        서비스 이용을 위해 개인정보 수집
        <br />및 이용(필수) 동의가 필요합니다.
      </Typography>
      <Checkbox
        shapes="circle"
        id="all"
        label="전체 약관에 동의합니다."
        checked={isAllChecked}
        onClick={() => onClickAllAgreement(!isAllChecked)}
      />
      <>
        {agreements.map((agreement, i) => {
          return (
            <S.AgreementsItemWrapper key={i}>
              <Checkbox
                shapes="simple"
                id={String(i)}
                label={`[${AGREEMENT_TEXTS[i].required ? '필수' : '선택'}]${
                  AGREEMENT_TEXTS[i].title
                }`}
                checked={agreement}
                onClick={() => onClickAgreement(i, !agreement)}
              />
              <img onClick={() => onClickAgreementContent(i)} src="icons/CaretRight_16px.svg" />
            </S.AgreementsItemWrapper>
          );
        })}
      </>
      <Button color="primary" size="large" disabled={!isRequiredChecked} onClick={onClickNext}>
        다음
      </Button>
    </>
  );
};

export default AgreementStep;
