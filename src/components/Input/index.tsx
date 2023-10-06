import S from './Input.styled';
import Typography from '../Typography';

import type { InputProps } from './types';

const Input = ({ id, type, placeholder, label, guide, colorType, ...args }: InputProps) => {
  return (
    <>
      {label && (
        <S.Label>
          <Typography type="body7" grayColor="white">
            {label}
          </Typography>
        </S.Label>
      )}
      <S.Input id={id} type={type} placeholder={placeholder} colorType={colorType} {...args} />
      {guide && (
        <S.InputError colorType={colorType}>
          <Typography type="caption2">{guide}</Typography>
        </S.InputError>
      )}
    </>
  );
};

export default Input;
