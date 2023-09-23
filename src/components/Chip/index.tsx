import S from './Chip.styled';

import type { ChipProps } from './types';

const Chip = ({ isClicked, text, disabled = false, ...args }: ChipProps) => {
  return (
    <S.Chip isClicked={isClicked} text={text} disabled={disabled} {...args}>
      {text}
    </S.Chip>
  );
};

export default Chip;
