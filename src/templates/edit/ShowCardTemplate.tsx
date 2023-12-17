import { Button, Card, Typography } from '@components';
import { DefaultCardInfo } from '@types';
import S from './Edit.styled';

interface ShowCardTemplateProps {
  cardInfo: DefaultCardInfo;
  onClickEdit: () => void;
}

const ShowCardTemplate = ({ cardInfo, onClickEdit }: ShowCardTemplateProps) => {
  return (
    <>
      <S.TextWrapper>
        <Typography type="body5" grayColor="white">
          현재 디자인
        </Typography>
      </S.TextWrapper>
      <S.CardWrapper>
        <Card
          name={cardInfo.name}
          email={cardInfo.email}
          profileUrl={cardInfo.profileImage}
          styleTemplate={cardInfo.styleTemplate}
          designTemplate={cardInfo.designTemplate}
        />
      </S.CardWrapper>

      <div>
        <Button size="large" color="primary" onClick={onClickEdit}>
          디자인 수정하기
        </Button>
      </div>
    </>
  );
};

export default ShowCardTemplate;
