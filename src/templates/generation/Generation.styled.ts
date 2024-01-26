import styled from 'styled-components';

const GenerationPageWrapper = styled.div`
  /* position: relative; */
`;

const GenerationHeader = styled.div`
  margin-bottom: 40px;
`;

const GenerationHeaderDescription = styled.div`
  margin-top: 12px;
`;

const ReasonItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 56px 0;
  margin-bottom: 16vh;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 84px 0 72px;
`;

const CardSelectWrapper = styled.div`
  margin-bottom: 24vh;
`;

const GenerationDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 4px;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 196px;
`;

const InputWrapper = styled.div`
  margin-bottom: 28px;
`;

const InputHeaderWrapper = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  margin-bottom: 28px;
`;

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

const LinkAddButtonWrapper = styled.div`
  margin-bottom: 62px;
`;

const ConfirmTitleWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 34px;
  text-align: center;
`;

const ConfirmCardWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 32vh;
`;

const ConfirmButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BackgroundCardWrapper = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 50vh;
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  opacity: 0.8;
  z-index: 0;
`;

const CardScaleWrapper = styled.div`
  transform: scale(1.5);
  filter: blur(10px);
  -webkit-filter: blur(10px);
`;

export default {
  GenerationPageWrapper,
  GenerationHeader,
  GenerationDescription,
  ProfileImageWrapper,
  StepsWrapper,
  PrevStepWrapper,
  NextStepWrapper,
  DesignArrowWrapper,
  InputWrapper,
  DesignSelectWrapper,
  LinkAddButtonWrapper,
  GenerationHeaderDescription,
  ReasonItemsWrapper,
  CardSelectWrapper,
  CardWrapper,
  ConfirmTitleWrapper,
  ConfirmCardWrapper,
  ConfirmButtonWrapper,
  BackgroundCardWrapper,
  CardScaleWrapper,
  InputHeaderWrapper,
};
