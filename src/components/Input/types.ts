import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
  _size: 'large' | 'medium' | 'small';
  error: string;
}
