import S from './Input.styled';

import type { InputProps } from './types';

const errorTemplate = {
  fontSize: '15px',
  color: '#e52528',
  marginTop: '5px',
};

const Input = ({ id, type, placeholder, size, error, ...args }: InputProps) => {
  return (
    <>
      <S.Input id={id} type={type} placeholder={placeholder} size={size} {...args} />
      {error && <div style={errorTemplate}>{error}</div>}
    </>
  );
};

export default Input;
