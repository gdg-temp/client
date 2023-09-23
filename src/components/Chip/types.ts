import { ButtonHTMLAttributes } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isClicked: boolean;
  text: string;
  disabled?: boolean;
}
