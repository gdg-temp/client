import { Button } from '@components';

interface DefaultFooterProps {
  confirmText: string;
  onConfirm: () => void;
  isNew: boolean;
  disabled: boolean;
}

const DefaultFooter = ({ confirmText, isNew, onConfirm, disabled }: DefaultFooterProps) => {
  return (
    <div>
      <Button color="primary" size="large" disabled={disabled} onClick={onConfirm}>
        {confirmText}
      </Button>
    </div>
  );
};

export default DefaultFooter;
