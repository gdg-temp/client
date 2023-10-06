import S from './Button.styled';

import type { ButtonProps } from './types';

const Button = ({ children, size, color, disabled = false, onClick, ...args }: ButtonProps) => {
  return (
    <>
      {size === 'addLink' ? (
        <S.Button size={size} color={color} disabled={disabled} onClick={onClick} {...args}>
          <S.IconWrapper>{children}</S.IconWrapper>
        </S.Button>
      ) : size === 'addLinkItem' ? (
        <S.Button size={size} color={color} disabled={disabled} onClick={onClick} {...args}>
          <S.addLinkItemWrapper>{children}</S.addLinkItemWrapper>
        </S.Button>
      ) : (
        <S.Button size={size} color={color} disabled={disabled} onClick={onClick} {...args}>
          {children}
        </S.Button>
      )}
    </>
  );
};

export default Button;
