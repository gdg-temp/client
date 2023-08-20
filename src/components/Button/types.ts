import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  color: 'black' | 'blue' | 'red' | 'green' | 'white';
  disabled?: boolean;
  size: 'large' | 'medium' | 'small';
}
