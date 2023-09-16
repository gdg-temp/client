export type color = 'main' | 'sub1' | 'sub2' | 'sub3' | 'error' | 'success';
export type colorGray =
  | 'white'
  | 'bluegray50'
  | 'bluegray100'
  | 'bluegray200'
  | 'bluegray300'
  | 'bluegray400'
  | 'bluegray500'
  | 'bluegray600'
  | 'bluegray700'
  | 'black';
export type fontSize = 'title' | 'subtitle' | 'body1' | 'body2' | 'body3' | 'body4';
export type fontWeight = 'bold' | 'medium' | 'regular';
export type fontFamily = string;

const color: { [key in color]: string } = {
  main: '#5C42FF',
  sub1: '#4532BF',
  sub2: '#2E2180',
  sub3: '#FFB800',
  error: '#FF3D00',
  success: '#00A3FF',
};

const colorGray: { [key in colorGray]: string } = {
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

export const fontSize: { [key in fontSize]: number } = {
  title: 32,
  subtitle: 24,
  body1: 18,
  body2: 16,
  body3: 14,
  body4: 12,
};

export const fontWeight: { [key in fontWeight]: string } = {
  bold: 'bold',
  medium: 'normal',
  regular: 'light',
};

export const fontFamily = 'pretendard';

export default { color, colorGray, fontSize, fontWeight, fontFamily };
