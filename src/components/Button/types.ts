import type { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: 'primary' | 'secondary';
  disabled?: boolean;
  size: 'large' | 'medium' | 'small' | 'plus';
}
