import S from './Checkbox.styled';

import type { CheckboxProps } from './types';

const Checkbox = ({ id, label, checked, disabled = false, onChange, ...args }: CheckboxProps) => {
  return (
    <S.CheckboxContainer>
      <S.Checkbox
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...args}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </S.CheckboxContainer>
  );
};

export default Checkbox;
