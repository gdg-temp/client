import { InputProps } from '../Input/types';

export interface SearchBarProps extends InputProps {
  isWrite: boolean;
  onClick: () => void;
}
