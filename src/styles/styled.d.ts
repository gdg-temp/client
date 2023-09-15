import 'styled-components';
import { color, fontSize, fontWeight, fontFamily } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: { [key in color]: string };
    fontSize: { [key in fontSize]: number };
    fontWeight: { [key in fontWeight]: string };
    fontFamily: { [key in fontFamily]: string };
  }
}
