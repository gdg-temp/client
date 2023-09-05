import styled from 'styled-components';

import type { CheckboxProps } from './types';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  > label {
    cursor: pointer;
    padding-top: 2px;
  }
`;

const Checkbox = styled.input<CheckboxProps>`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default { CheckboxContainer, Checkbox };
