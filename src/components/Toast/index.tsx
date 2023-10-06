import Typography from '../Typography';
import S from './Toast.styled';
import type { ToastProps } from './types';

const Toast = ({ message = '', show = false, duration = 3000 }: ToastProps) => {
  return show ? (
    <S.ToastWrapper duration={duration}>
      <Typography grayColor="white" type="body6">
        {message}
      </Typography>
    </S.ToastWrapper>
  ) : null;
};

export default Toast;
