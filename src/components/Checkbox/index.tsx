import S from './Checkbox.styled';

import type { CheckboxProps } from './types';

const Checkbox = ({ shapes, id, label, checked, disabled = false, ...args }: CheckboxProps) => {
  return (
    <S.CheckboxContainer>
      <S.Checkbox
        type="checkbox"
        shapes={shapes}
        id={id}
        checked={checked}
        disabled={disabled}
        {...args}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </S.CheckboxContainer>
  );
};

export default Checkbox;
