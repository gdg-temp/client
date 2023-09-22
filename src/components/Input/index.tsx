import S from './Input.styled';

import type { InputProps } from './types';

const Input = ({ id, type, placeholder, label, guide, isError, ...args }: InputProps) => {
  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Input id={id} type={type} placeholder={placeholder} isError={isError} {...args} />
      {guide && <S.InputError isError={isError}>{guide}</S.InputError>}
    </>
  );
};

export default Input;
