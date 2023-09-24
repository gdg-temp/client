import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
  label?: string;
  guide?: string;
  isError?: boolean;
  isSuccess?: boolean;
}
