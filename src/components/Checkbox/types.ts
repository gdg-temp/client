import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  shapes: 'circle' | 'simple';
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
}
