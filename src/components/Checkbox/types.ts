import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
}
