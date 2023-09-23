import type { ReactNode, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  shapes: 'circle' | 'simple';
  id: string;
  label?: ReactNode;
  checked: boolean;
  disabled?: boolean;
}
