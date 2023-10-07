import { createContext, useState, ReactNode } from 'react';
import { Toast } from '@components';

interface ToastContextProps {
  showToast: (message: string, duration?: number) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const showToast = (message: string, duration: number = 3000) => {
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={message} show={show} />
    </ToastContext.Provider>
  );
};
