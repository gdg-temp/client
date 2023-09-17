import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import type { InputProps } from './types';

type MyThemedStyledProps = ThemedStyledProps<InputProps & DefaultTheme, DefaultTheme>;

const INPUT_WIDTH: Record<InputProps['_size'], string> = {
  large: '100%',
  medium: '80%',
  small: '50%',
};

const Input = styled.input<MyThemedStyledProps>`
  display: block;
  width: ${({ _size }) => INPUT_WIDTH[_size]};
  border: 1px solid ${(props) => props.theme.colorGray.bluegray300};
  border-radius: 5px;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.body1}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${(props) => props.theme.color.sub2};
  background-color: white;
`;

const InputError = styled.div`
  font-size: ${(props) => props.theme.fontSize.body3}px;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.error};
  margin-top: 5px;
`;

export default { Input, InputError };
