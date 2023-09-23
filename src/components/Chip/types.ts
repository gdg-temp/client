import { ButtonHTMLAttributes } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isClicked: boolean;
  value: string;
  disabled?: boolean;
  onClick?: () => void;
}
