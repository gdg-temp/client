import S from './Chip.styled';

import type { ChipProps } from './types';

const Chip = ({ isClicked, value, disabled = false, ...args }: ChipProps) => {
  return (
    <S.Chip isClicked={isClicked} value={value} disabled={disabled} {...args}>
      {value}
    </S.Chip>
  );
};

export default Chip;
