import styled from 'styled-components';

import type { ButtonProps } from './types';

const BACKGROUND_COLOR: Record<ButtonProps['color'], string> = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF3D01',
  green: '#6EE944',
  blue: '#1557FF',
};

const BUTTON_WIDTH: Record<ButtonProps['size'], string> = {
  large: '319px',
  medium: '252px',
  small: '98px',
};

const BUTTON_HEIGHT: Record<ButtonProps['size'], string> = {
  large: '54px',
  medium: '54px',
  small: '48px',
};

const Button = styled.button<ButtonProps>`
  width: ${({ size }) => BUTTON_WIDTH[size]};
  height: ${({ size }) => BUTTON_HEIGHT[size]};
  border: ${({ color }) => (color === 'white' ? '1px solid #CCCFD3' : 'none')};
  border-radius: 10px;
  font-size: 16px;
  font-family: 'Pretendard';
  background-color: ${({ disabled, color }) => (disabled ? '#CCCFD3' : BACKGROUND_COLOR[color])};
  color: ${({ color }) => (color === 'white' ? '#000' : '#fff')};
`;

export default { Button };
