import { Button, Card, Typography } from '@components';
import { DefaultCardInfo } from '@types';

interface ShowCardTemplateProps {
  cardInfo: DefaultCardInfo;
  onClickEdit: () => void;
}

const ShowCardTemplate = ({ cardInfo, onClickEdit }: ShowCardTemplateProps) => {
  return (
    <div>
      <Typography type="body5" grayColor="white">
        현재 디자인
      </Typography>

      <Card
        name={cardInfo.name}
        email={cardInfo.email}
        profileUrl={cardInfo.profileImage}
        styleTemplate={cardInfo.styleTemplate}
        designTemplate={cardInfo.designTemplate}
      />

      <div>
        <Button size="large" color="primary" onClick={onClickEdit}>
          디자인 수정하기
        </Button>
      </div>
    </div>
  );
};

export default ShowCardTemplate;
