import type { InputHTMLAttributes } from 'react';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onClick: () => void;
  isWrite: boolean;
}
