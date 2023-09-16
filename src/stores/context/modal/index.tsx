import { createContext, useEffect, useState } from 'react';
import { Modal } from '@components';

import type { Context, ContextProviderProps, ModalContextProps } from './types';

export const ModalContext = createContext<Context>({
  open: () => {},
  close: () => {},
  setLoading: () => {},
});

export const ModalProvider = ({ children }: ContextProviderProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalProps, setProps] = useState<ModalContextProps>({
    content: '',
    buttonTitle: '',
    buttonType: 'oneButton',
    size: 'small',
    onClick: () => {},
    onClose: () => {},
  });

  useEffect(() => {
    window.onpopstate = () => {
      setIsOpened(false);
    };
  }, []);

  return (
    <ModalContext.Provider
      value={{
        open: (props) => {
          setProps(props);
          setIsOpened(true);
        },
        close: () => {
          setIsOpened(false);
        },
        setLoading: (isLoading: boolean) => {
          setIsLoading(isLoading);
        },
      }}
    >
      {children}
      {
        <Modal
          isLoading={isLoading}
          isOpened={isOpened}
          content={modalProps.content}
          size={modalProps.size}
          buttonType={modalProps.buttonType}
          buttonTitle={modalProps.buttonTitle}
          onClick={modalProps.onClick}
          onClose={() => setIsOpened(false)}
        />
      }
    </ModalContext.Provider>
  );
};
