import 'styled-components';
import type {
  ColorTypes,
  ColorGrayTypes,
  FontSizeTypes,
  FontWeightTypes,
  FontFamilyTypes,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorTypes;
    colorGray: ColorGrayTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
    fontFamily: FontFamilyTypes;
  }
}
