import { DefaultTheme } from 'styled-components';

const color = {
  main: '#5C42FF',
  sub1: '#4532BF',
  sub2: '#2E2180',
  sub3: '#FFB800',
  error: '#FF3D00',
  success: '#00A3FF',
};

const colorGray = {
  white: '#FFFFFF',
  bluegray50: '#F7F8FB',
  bluegray100: '#ECEFF2',
  bluegray200: '#CCCFD3',
  bluegray300: '#A2A5AA',
  bluegray400: '#6E6F73',
  bluegray500: '#424345',
  bluegray600: '#343436',
  bluegray700: '#1E1E1E',
  black: '#000000',
};

const fontSize = {
  title: '32px',
  subtitle: '24px',
  body1: '18px',
  body2: '16px',
  body3: '14px',
  body4: '12px',
};

const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
};

const fontFamily = 'pretendard';

export type colorTypes = typeof color;
export type colorGrayTypes = typeof colorGray;
export type fontSizeTypes = typeof fontSize;
export type fontWeightTypes = typeof fontWeight;
export type fontFamilyTypes = string;

export const theme: DefaultTheme = {
  color,
  colorGray,
  fontSize,
  fontWeight,
  fontFamily,
};
