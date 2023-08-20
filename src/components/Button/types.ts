import type { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: 'black' | 'blue' | 'red' | 'green' | 'white';
  disabled?: boolean;
  size: 'large' | 'medium' | 'small';
}
