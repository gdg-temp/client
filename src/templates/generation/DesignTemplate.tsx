import { Button, Card, Typography } from '@components';
import { CARD_DESIGN_STYLE_MAPPER, CARD_STYLE_MAPPER } from '@static';
import { DefaultCardInfo, StyleType } from '@types';
import { useState } from 'react';

import S from './Generation.styled';
import Image from 'next/image';

interface DesignTemplateProps {
  cardInfo: DefaultCardInfo;
  changeCardInfo: (info: Partial<DefaultCardInfo>) => void;
  onPrev: () => void;
  onNext: () => void;
}

const DesignTemplate = ({ cardInfo, changeCardInfo, onNext, onPrev }: DesignTemplateProps) => {
  const [designIndex, setDesignIndex] = useState(0);

  const handleCardStyle = (isRight: boolean) => {
    const len = CARD_DESIGN_STYLE_MAPPER[cardInfo.styleTemplate].length;
    let newIndex = isRight ? designIndex + 1 : designIndex - 1;
    if (newIndex === -1) newIndex = len - 1;
    if (newIndex >= len) newIndex = newIndex - len;
    setDesignIndex(newIndex);
    changeCardInfo({ designTemplate: String(newIndex + 1) });
  };

  return (
    <div>
      <S.CardWrapper>
        <Card
          name={cardInfo.name}
          email={cardInfo.email}
          profileUrl={cardInfo.profileImage}
          styleTemplate={cardInfo.styleTemplate}
          designTemplate={cardInfo.designTemplate}
        />
      </S.CardWrapper>
      <S.CardSelectWrapper>
        <S.DesignSelectWrapper>
          <S.DesignArrowWrapper onClick={() => handleCardStyle(false)}>
            <Image width={24} height={24} src={`/icons/CaretLeft_24px.svg`} alt={'left'} />
          </S.DesignArrowWrapper>
          <Typography grayColor="white" type="title2">
            {CARD_DESIGN_STYLE_MAPPER[cardInfo.styleTemplate][designIndex].title}
          </Typography>
          <S.DesignArrowWrapper onClick={() => handleCardStyle(true)}>
            <Image width={24} height={24} src={`/icons/CaretRight_24px.svg`} alt={'right'} />
          </S.DesignArrowWrapper>
        </S.DesignSelectWrapper>
      </S.CardSelectWrapper>
      <S.StepsWrapper>
        <S.PrevStepWrapper>
          <Button size="large" color="secondary" onClick={onPrev}>
            이전
          </Button>
        </S.PrevStepWrapper>
        <S.NextStepWrapper>
          <Button size="large" color="primary" onClick={onNext}>
            완료
          </Button>
        </S.NextStepWrapper>
      </S.StepsWrapper>
    </div>
  );
};

export default DesignTemplate;
