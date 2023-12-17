import styled from 'styled-components';

import type { ButtonProps } from './types';

const BACKGROUND_COLOR: Record<ButtonProps['color'], string> = {
  primary: '#5C42FF',
  secondary: 'transparent',
  addLink: '#1E1E1E',
  addLinkItem: '#1E1E1E',
};

const BUTTON_BORDER: Record<ButtonProps['color'], string> = {
  primary: 'none',
  secondary: '1px solid #5C42FF',
  addLink: '1px solid #5C42FF',
  addLinkItem: 'none',
};

const BUTTON_HOVER: Record<ButtonProps['color'], string> = {
  primary: '#6f57ff',
  secondary: 'rgba(92, 66, 255, 0.2)',
  addLink: 'none',
  addLinkItem: '#343436',
};

const BUTTON_ACTIVE: Record<ButtonProps['color'], string> = {
  primary: 'rgba(92, 66, 255, 0.6)',
  secondary: 'rgba(92, 66, 255, 0.4)',
  addLink: '#5C42FF',
  addLinkItem: '#1E1E1E',
};

const FONT_COLOR: Record<string, string> = {
  primary: '#ffffff',
  secondary: '#5C42FF',
  addLink: '#ffffff',
  addLinkItem: '#ffffff',
};

const BUTTON_WIDTH: Record<ButtonProps['size'], string> = {
  large: '100%',
  medium: '100%',
  small: '74px',
  addLink: '96px',
  addLinkItem: '100%',
};

const BUTTON_HEIGHT: Record<ButtonProps['size'], string> = {
  large: '54px',
  medium: '48px',
  small: '36px',
  addLink: '48px',
  addLinkItem: '40px',
};

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const addLinkItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  margin: 4px 12px;
`;

const Button = styled.button<ButtonProps>`
  width: ${({ size }) => BUTTON_WIDTH[size]};
  height: ${({ size }) => BUTTON_HEIGHT[size]};
  border: ${({ disabled, color }) =>
    disabled || color === 'addLink' ? 'none' : BUTTON_BORDER[color]};
  border-radius: ${({ size }) =>
    size === 'addLinkItem' ? '0' : size === 'small' ? '40px' : '8px'};
  font-size: ${({ size }) => (size === 'small' || size === 'addLinkItem' ? '14px' : '16px')};
  font-weight: 700;
  background-color: ${({ disabled, color }) => (disabled ? '#6e6f73' : BACKGROUND_COLOR[color])};
  color: ${({ disabled, color }) => (disabled ? '#A2A5AA' : FONT_COLOR[color])};
  &:hover {
    background-color: ${({ disabled, color }) => (disabled ? '#6e6f73' : BUTTON_HOVER[color])};
  }
  &:active {
    background-color: ${({ disabled, color }) =>
      disabled || color === 'addLink' ? 'none' : BUTTON_ACTIVE[color]};
    border: ${({ disabled, color }) => (disabled ? 'none' : BUTTON_BORDER[color])};
    color: ${({ color }) => (color === 'addLinkItem' ? '#5C42ff' : FONT_COLOR[color])};
  }
  z-index: 2;
`;

export default { Button, IconWrapper, addLinkItemWrapper };
