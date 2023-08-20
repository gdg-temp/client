import S from './Button.styled';

import type { ButtonProps } from './types';

const Button = ({ children, size, color, disabled = false }: ButtonProps) => {
  return (
    <S.Button size={size} color={color} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;
