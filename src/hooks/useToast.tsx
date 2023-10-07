import { useContext } from 'react';
import { ToastContext } from '@stores';

/**
 * @description
 * 토스트메세지를 띄울 수 있는 함수를 제공합니다.

 * @example
 * const { showToast } = useToast();
 * showToast("토스트 메세지가 여기에 표시됩니다.", 5000); // 5초
 */
const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default useToast;
