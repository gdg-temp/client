import S from './Input.styled';

import type { InputProps } from './types';

const Input = ({ id, type, placeholder, label, guide, success, ...args }: InputProps) => {
  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Input id={id} type={type} placeholder={placeholder} success={success} {...args} />
      {guide && <S.InputError success={success}>{guide}</S.InputError>}
    </>
  );
};

export default Input;
