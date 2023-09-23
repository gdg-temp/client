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
  blueGray50: '#F7F8FB',
  blueGray100: '#ECEFF2',
  blueGray200: '#CCCFD3',
  blueGray300: '#A2A5AA',
  blueGray400: '#6E6F73',
  blueGray500: '#424345',
  blueGray600: '#343436',
  blueGray700: '#1E1E1E',
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

export type ColorTypes = typeof color;
export type ColorGrayTypes = typeof colorGray;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type FontFamilyTypes = string;

export const theme: DefaultTheme = {
  color,
  colorGray,
  fontSize,
  fontWeight,
  fontFamily,
};
