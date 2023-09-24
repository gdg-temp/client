import S from './Input.styled';

import type { InputProps } from './types';

const Input = ({
  id,
  type,
  placeholder,
  label,
  guide,
  isError = false,
  isSuccess = false,
  ...args
}: InputProps) => {
  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        id={id}
        type={type}
        placeholder={placeholder}
        isError={isError}
        isSuccess={isSuccess}
        {...args}
      />
      {guide && (
        <S.InputError isError={isError} isSuccess={isSuccess}>
          {guide}
        </S.InputError>
      )}
    </>
  );
};

export default Input;
