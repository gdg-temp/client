import S from './Input.styled';

import type { InputProps } from './types';

const Input = ({ id, type, placeholder, label, guide, colorType, ...args }: InputProps) => {
  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Input id={id} type={type} placeholder={placeholder} colorType={colorType} {...args} />
      {guide && <S.InputError colorType={colorType}>{guide}</S.InputError>}
    </>
  );
};

export default Input;
