import { NavBar, Typography } from '@components';
import { AGREEMENT_TEXTS } from '@static';

import S from './Signup.styled';

interface AgreementContentProps {
  step: number;
  onClickAgreement: () => void;
  onClickBack: () => void;
}

const AgreementContent = ({ step, onClickAgreement, onClickBack }: AgreementContentProps) => {
  return (
    <>
      <NavBar onClickLeft={onClickBack} />
      <Typography grayColor="white" type="title2">
        {AGREEMENT_TEXTS[step].title}
      </Typography>
      <Typography grayColor="blueGray300" type="body7">
        {AGREEMENT_TEXTS[step].content}
      </Typography>
    </>
  );
};

export default AgreementContent;
