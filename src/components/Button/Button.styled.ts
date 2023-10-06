import styled from 'styled-components';

import type { ButtonProps } from './types';

const BACKGROUND_COLOR: Record<ButtonProps['color'], string> = {
  primary: '#5C42FF',
  secondary: 'transparent',
};

const BUTTON_BORDER: Record<ButtonProps['color'], string> = {
  primary: 'none',
  secondary: '1px solid #5C42FF',
};

const BUTTON_HOVER: Record<ButtonProps['color'], string> = {
  primary: '#6f57ff',
  secondary: 'rgba(92, 66, 255, 0.2)',
};

const BUTTON_ACTIVE: Record<ButtonProps['color'], string> = {
  primary: 'rgba(92, 66, 255, 0.6)',
  secondary: 'rgba(92, 66, 255, 0.4)',
};

const FONT_COLOR: Record<string, string> = {
  primary: '#ffffff',
  secondary: '#5C42FF',
};

const BUTTON_WIDTH: Record<ButtonProps['size'], string> = {
  large: '100%',
  medium: '100%',
  small: '74px',
};

const BUTTON_HEIGHT: Record<ButtonProps['size'], string> = {
  large: '54px',
  medium: '48px',
  small: '36px',
};

const Button = styled.button<ButtonProps>`
  width: ${({ size }) => BUTTON_WIDTH[size]};
  height: ${({ size }) => BUTTON_HEIGHT[size]};
  border: ${({ disabled, color }) => (disabled ? 'none' : BUTTON_BORDER[color])};
  border-radius: ${({ size }) => (size === 'small' ? '40px' : '8px')};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  background-color: ${({ disabled, color }) => (disabled ? '#6e6f73' : BACKGROUND_COLOR[color])};
  color: ${({ disabled, color }) => (disabled ? '#A2A5AA' : FONT_COLOR[color])};
  &:hover {
    background-color: ${({ disabled, color }) => (disabled ? '#6e6f73' : BUTTON_HOVER[color])};
  }
  &:active {
    background-color: ${({ disabled, color }) => (disabled ? 'none' : BUTTON_ACTIVE[color])};
  }
`;

export default { Button };
