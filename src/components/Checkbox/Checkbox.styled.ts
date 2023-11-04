import styled from 'styled-components';

import type { CheckboxProps } from './types';

const CHECKBOX_SHAPES: Record<CheckboxProps['shapes'], string> = {
  circle: "#cccfd3 url('/icons/Check.svg') 50% 50% no-repeat",
  simple: "url('/icons/Check_simple.svg') 50% 50% no-repeat",
};

const CHECKBOX_SHAPES_CHECKED: Record<CheckboxProps['shapes'], string> = {
  circle: "#5c42ff url('/icons/Check.svg') 50% 50% no-repeat",
  simple: "url('/icons/Check_simple_checked.svg') 50% 50% no-repeat",
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  > label {
    cursor: pointer;
    padding-top: 2px;
  }
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})<CheckboxProps>`
  appearance: none;
  width: 24px;
  height: 24px;
  margin-right: ${({ shapes }) => (shapes === 'circle' ? '12px' : '16px')};
  cursor: pointer;
  border-radius: 50%;
  background: ${({ shapes }) => CHECKBOX_SHAPES[shapes]};

  &:checked {
    background: ${({ shapes }) => CHECKBOX_SHAPES_CHECKED[shapes]};
  }
`;

export default { CheckboxContainer, Checkbox };
