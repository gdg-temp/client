export type color = 'main' | 'sub1' | 'sub2' | 'error' | 'success';
export type fontSize = 'title' | 'subtitle' | 'body1' | 'body2' | 'body3' | 'body4';
export type fontWeight = 'bold' | 'medium' | 'regular';
export type fontFamily = string;

const color: { [key in color]: string } = {
  main: '#5C42FF',
  sub1: '#4532BF',
  sub2: '#312485', // 다시 설정 필요
  error: '#e52528', // 다시 설정 필요
  success: '#2ab1fa', // 다시 설정 필요
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

export default { color, fontSize, fontWeight, fontFamily };
