import styled from 'styled-components';
import theme from 'src/styles/theme';

import type { InputProps } from './types';

const INPUT_WIDTH: Record<InputProps['size'], string> = {
  large: '100%',
  medium: '80%',
  small: '50%',
};

const Input = styled.input<InputProps>`
  display: block;
  width: ${({ size }) => INPUT_WIDTH[size]};
  border: 1px solid ${theme.color.sub1};
  border-radius: 5px;
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize.body1}px;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.main};
  background-color: white;
`;

const InputError = styled.div`
  font-size: ${theme.fontSize.body2};
  font-family: ${theme.fontWeight.regular};
  color: ${theme.color.error};
  margin-top: '5px';
`;

export default { Input, InputError };
