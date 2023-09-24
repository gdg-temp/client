import S from './Typograph.styled';

import type { TypographyProps } from './types';

const Typography = ({ children, customColor, type, grayColor, systemColor }: TypographyProps) => {
  return (
    <S.TypoWrapper
      type={type}
      customColor={customColor}
      grayColor={grayColor}
      systemColor={systemColor}
    >
      {children}
    </S.TypoWrapper>
  );
};

export default Typography;
