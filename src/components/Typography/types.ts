import type { ReactNode } from 'react';
import type { ColorGrayTypes, ColorTypes } from '@styles';

export interface TypographyProps {
  type:
    | 'title1'
    | 'title2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'body6'
    | 'body7'
    | 'caption1'
    | 'caption2';
  grayColor?: keyof ColorGrayTypes;
  systemColor?: keyof ColorTypes;
  customColor?: string;
  children: ReactNode;
}
