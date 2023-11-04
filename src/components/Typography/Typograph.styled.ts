import styled from 'styled-components';
import type { TypographyProps } from './types';

const TypoWrapper = styled.div<TypographyProps>`
  line-height: 140%;
  color: ${(props) => {
    if (props.customColor) {
      return props.customColor;
    } else if (props.systemColor) {
      return props.theme.color[props.systemColor];
    } else if (props.grayColor) {
      return props.theme.colorGray[props.grayColor];
    }
  }};
  font-size: ${({ type, theme }) => {
    switch (type) {
      case 'title1':
        return theme.fontSize.title;
      case 'title2':
        return theme.fontSize.subtitle;

      case 'body1':
        return theme.fontSize.body1;
      case 'body2':
        return theme.fontSize.body1;
      case 'body3':
        return theme.fontSize.body2;
      case 'body4':
        return theme.fontSize.body2;
      case 'body5':
        return theme.fontSize.body2;
      case 'body6':
        return theme.fontSize.body3;
      case 'body7':
        return theme.fontSize.body3;
      case 'caption1':
        return theme.fontSize.body3;
      case 'caption2':
        return theme.fontSize.body4;
      default:
        return theme.fontSize.body1;
    }
  }};
  font-weight: ${({ type, theme }) => {
    switch (type) {
      case 'title1':
        return theme.fontWeight.bold;
      case 'title2':
        return theme.fontWeight.bold;

      case 'body1':
        return theme.fontWeight.bold;
      case 'body2':
        return theme.fontWeight.medium;
      case 'body3':
        return theme.fontWeight.bold;
      case 'body4':
        return theme.fontWeight.medium;
      case 'body5':
        return theme.fontWeight.regular;
      case 'body6':
        return theme.fontWeight.bold;
      case 'body7':
        return theme.fontWeight.medium;
      case 'caption1':
        return theme.fontWeight.regular;
      case 'caption2':
        return theme.fontWeight.regular;
      default:
        return theme.fontWeight.medium;
    }
  }};
`;

export default { TypoWrapper };
