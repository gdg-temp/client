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

const DesignArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #1e1e1e;
  cursor: pointer;
`;

const DesignSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default {
  StepsWrapper,
  PrevStepWrapper,
  NextStepWrapper,
  DesignArrowWrapper,
  DesignSelectWrapper,
};
