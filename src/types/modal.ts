import { ReactNode } from 'react';

export interface ModalProps {
  content: ReactNode;
  buttonTitle?: string;
  buttonType?: 'noneButton' | 'oneButton' | 'twoButton';
  isLoading?: boolean;
  isOpened?: boolean;
  size?: 'large' | 'small' | 'addLink';
  onClick: () => void;
  onClose: () => void;
}
