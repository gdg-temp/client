import styled from 'styled-components';

import type { ChipProps } from './types';

// const BACKGROUND_COLOR: Record<ChipProps['clicked'], string> = {
//   default: 'transparent',
//   clicked: '#5C42FF',
// };

// const BORDER: Record<ChipProps['clicked'], string> = {
//   default: '1px solid #6E6F73',
//   clicked: 'none',
// };

const Chip = styled.button<ChipProps>`
  appearance: none;
  width: 66px;
  height: 40px;
  font-size: 14px;
  border: ${({ isClicked }) => (isClicked ? 'none' : '1px solid #6E6F73')};
  border-radius: 33px;
  background-color: ${({ isClicked }) => (isClicked ? '#5C42FF' : 'transparent')};
  color: white;
  /* & :checked {
    border: none;
    background-color: #5c42ff;
  } */
`;

export default { Chip };
