import S from './Input.styled';

import type { InputProps } from './types';

const Input = ({ id, type, placeholder, size, error, ...args }: InputProps) => {
  return (
    <>
      <S.Input id={id} type={type} placeholder={placeholder} size={size} {...args} />
      {error && <S.InputError>{error}</S.InputError>}
    </>
  );
};

export default Input;
