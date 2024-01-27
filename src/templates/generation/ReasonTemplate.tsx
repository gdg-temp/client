import { Button, Chip, Typography } from '@components';
import { ReasonType } from '@types';
import { REASON_TEXT } from 'src/static/reason';

import S from './Generation.styled';

interface ReasonTemplateProps {
  reasonTexts: { [key in ReasonType]: boolean };
  changeReasonTexts: (reasonKey: ReasonType, isActive: boolean) => void;
  onPrev: () => void;
  onNext: () => void;
}

const ReasonTemplate = ({
  changeReasonTexts,
  onNext,
  onPrev,
  reasonTexts,
}: ReasonTemplateProps) => {
  return (
    <div>
      <Typography grayColor="blueGray300" type="body7">
        명함 뒷면에 선택한 문장이 노출됩니다. (최대 3개)
      </Typography>
      <S.ReasonItemsWrapper>
        {(Object.keys(reasonTexts) as ReasonType[]).map((reasonKey, index) => (
          <div key={index}>
            <Chip
              value={REASON_TEXT[reasonKey]}
              isClicked={reasonTexts[reasonKey]}
              onClick={() => changeReasonTexts(reasonKey, !reasonTexts[reasonKey])}
            />
          </div>
        ))}
      </S.ReasonItemsWrapper>
      <S.StepsWrapper>
        <S.PrevStepWrapper>
          <Button size="large" color="secondary" onClick={onPrev}>
            이전
          </Button>
        </S.PrevStepWrapper>
        <S.NextStepWrapper>
          <Button size="large" color="primary" onClick={onNext}>
            다음 단계로
          </Button>
        </S.NextStepWrapper>
      </S.StepsWrapper>
    </div>
  );
};

export default ReasonTemplate;
