import styled from 'styled-components';

const AgreementsItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AgreementsHeaderWrapper = styled.div`
  margin-bottom: 12px;
`;

const AgreementsDescriptionWrapper = styled.div`
  margin-bottom: 40px;
`;

const AllAgreeTextWrapper = styled.div`
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colorGray.blueGray200}`};
`;

const AgreementsTextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AgreementsStepButtonWrapper = styled.div`
  margin-top: calc(100vh - 680px);
`;

const ConfirmStepButtonWrapper = styled.div`
  margin-top: calc(100vh - 450px);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default {
  AgreementsItemWrapper,
  AgreementsDescriptionWrapper,
  AgreementsHeaderWrapper,
  AgreementsTextsWrapper,
  AllAgreeTextWrapper,
  ConfirmStepButtonWrapper,
  AgreementsStepButtonWrapper,
};
