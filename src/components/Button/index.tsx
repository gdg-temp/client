import S from './Button.styled';

import type { ButtonProps } from './types';

const Button = ({ children, size, color, disabled = false, onClick, ...args }: ButtonProps) => {
  return (
    <S.Button size={size} color={color} disabled={disabled} onClick={onClick} {...args}>
      {children}
    </S.Button>
  );
};

export default Button;
