import { AGREEMENT_TEXTS } from '@static';

const checkAgreements = (agreements: boolean[]) => {
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
  return {
    requiredChecked,
    allChecked,
  };
};

export default checkAgreements;
