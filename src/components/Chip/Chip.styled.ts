import styled from 'styled-components';

import type { ChipProps } from './types';

const Chip = styled.button<ChipProps>`
  width: 66px;
  height: 40px;
  font-size: 14px;
  font-family: 'Pretendard';
  border: ${({ disabled, isClicked }) =>
    disabled === false && isClicked ? 'none' : '1px solid #6E6F73'};
  border-radius: 33px;
  background-color: ${({ disabled, isClicked }) =>
    disabled === false && isClicked ? '#5C42FF' : 'transparent'};
  color: white;
`;

export default { Chip };
