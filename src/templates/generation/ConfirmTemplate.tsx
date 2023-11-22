import { Button, Card } from '@components';
import { DefaultCardInfo } from '@types';

interface ConfirmTemplateProps {
  cardInfo: DefaultCardInfo;
  onConfirm: () => void;
  onReset: () => void;
}

const ConfirmTemplate = ({ cardInfo, onConfirm, onReset }: ConfirmTemplateProps) => {
  return (
    <div>
      <Card
        name={cardInfo.name}
        email={cardInfo.email}
        profileUrl={cardInfo.profileImage}
        styleTemplate={cardInfo.styleTemplate}
        designTemplate={cardInfo.designTemplate}
      />
      <Button size="large" color="primary" onClick={onConfirm}>
        네 시작할게요
      </Button>
      <Button size="large" color="secondary" onClick={onReset}>
        다시 만들고 싶어요
      </Button>
    </div>
  );
};

export default ConfirmTemplate;
