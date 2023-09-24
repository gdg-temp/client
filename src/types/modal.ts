import { ReactNode } from 'react';

export interface ModalProps {
  content: ReactNode;
  buttonTitle?: string;
  buttonType?: 'noneButton' | 'oneButton' | 'twoButton';
  isLoading?: boolean;
  isOpened?: boolean;
  size?: 'large' | 'small';
  onClick: () => void;
  onClose: () => void;
}
