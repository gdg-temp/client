import 'styled-components';
import {
  colorTypes,
  colorGrayTypes,
  fontSizeTypes,
  fontWeightTypes,
  fontFamilyTypes,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: colorTypes;
    colorGray: colorGrayTypes;
    fontSize: fontSizeTypes;
    fontWeight: fontWeightTypes;
    fontFamily: fontFamilyTypes;
  }
}
