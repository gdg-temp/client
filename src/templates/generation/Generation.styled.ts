import styled from 'styled-components';

const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PrevStepWrapper = styled.div`
  flex-grow: 1;
`;

const NextStepWrapper = styled.div`
  flex-grow: 2;
`;

export default { StepsWrapper, PrevStepWrapper, NextStepWrapper };
