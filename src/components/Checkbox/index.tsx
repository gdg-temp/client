import { useState } from 'react';
import S from './Checkbox.styled';

import type { CheckboxProps } from './types';

const Checkbox = ({ shapes, id, label, checked, disabled = false, ...args }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <S.CheckboxContainer>
      <S.Checkbox
        type="checkbox"
        shapes={shapes}
        id={id}
        checked={isChecked}
        disabled={disabled}
        onChange={onChange}
        {...args}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </S.CheckboxContainer>
  );
};

export default Checkbox;
