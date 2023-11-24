import { Button, Card } from '@components';
import { DefaultCardInfo } from '@types';

interface ConfirmTemplateProps {
  cardInfo: DefaultCardInfo;
  onConfirm: () => void;
  onReset: () => void;
  mode?: 'generate' | 'edit';
}

const ConfirmTemplate = ({
  cardInfo,
  onConfirm,
  onReset,
  mode = 'generate',
}: ConfirmTemplateProps) => {
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
        {mode === 'generate' ? '네 시작할게요' : '내 명함으로 가기'}
      </Button>
      <Button size="large" color="secondary" onClick={onReset}>
        다시 만들고 싶어요
      </Button>
    </div>
  );
};

export default ConfirmTemplate;
