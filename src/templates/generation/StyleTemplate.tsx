import { Button, Card, Typography } from '@components';
import { CARD_STYLE_MAPPER } from '@static';
import { DefaultCardInfo, StyleType } from '@types';
import { useState } from 'react';

import S from './Generation.styled';
import Image from 'next/image';

interface StyleTemplateProps {
  cardInfo: DefaultCardInfo;
  changeCardInfo: (info: Partial<DefaultCardInfo>) => void;
  onPrev: () => void;
  onNext: () => void;
}

const StyleTemplate = ({ cardInfo, changeCardInfo, onNext, onPrev }: StyleTemplateProps) => {
  const [styleIndex, setStyleIndex] = useState(0);
  const styleArr = Object.keys(CARD_STYLE_MAPPER) as StyleType[];
  const handleCardStyle = (isRight: boolean) => {
    const len = styleArr.length;
    let newIndex = isRight ? styleIndex + 1 : styleIndex - 1;
    if (newIndex === -1) newIndex = len - 1;
    if (newIndex >= len) newIndex = newIndex - len;
    setStyleIndex(newIndex);
    changeCardInfo({ styleTemplate: styleArr[newIndex], designTemplate: 1 });
  };
  return (
    <div>
      <Card
        name={cardInfo.name}
        email={cardInfo.email}
        profileUrl={cardInfo.profileImage}
        styleTemplate={cardInfo.styleTemplate}
        designTemplate={cardInfo.designTemplate}
      />
      <S.DesignSelectWrapper>
        <S.DesignArrowWrapper onClick={() => handleCardStyle(false)}>
          <Image width={24} height={24} src={`/icons/CaretLeft_24px.svg`} alt={'left'} />
        </S.DesignArrowWrapper>
        <Typography grayColor="white" type="title2">
          {CARD_STYLE_MAPPER[cardInfo.styleTemplate]}
        </Typography>
        <S.DesignArrowWrapper onClick={() => handleCardStyle(true)}>
          <Image width={24} height={24} src={`/icons/CaretRight_24px.svg`} alt={'right'} />
        </S.DesignArrowWrapper>
      </S.DesignSelectWrapper>
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

export default StyleTemplate;
