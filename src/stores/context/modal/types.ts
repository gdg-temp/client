import type { ReactNode } from 'react';
import type { ModalProps } from '@types';

export type ModalContextProps = Omit<ModalProps, 'isLoading' | 'isOpened'>;

export type Context = {
  open: (props: ModalProps) => void;
  close: () => void;
  setLoading: (isLoading: boolean) => void;
};

export interface ContextProviderProps {
  children: ReactNode;
}
