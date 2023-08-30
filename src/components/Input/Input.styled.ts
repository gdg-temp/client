import styled from 'styled-components';

import type { InputProps } from './types';

const INPUT_WIDTH: Record<InputProps['size'], string> = {
  large: '100%',
  medium: '80%',
  small: '50%',
};

const Input = styled.input<InputProps>`
  display: block;
  width: ${({ size }) => INPUT_WIDTH[size]};
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 16px;
  color: #000;
  background-color: #ffffff;
`;

export default { Input };
