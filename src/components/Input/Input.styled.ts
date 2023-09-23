import styled from 'styled-components';
import type { InputProps } from './types';

const Input = styled.input<InputProps>`
  padding: 14px 16px;
  border: ${(props) =>
    props.isError
      ? `1px solid ${props.theme.color.success}`
      : props.isError === false
      ? `1px solid ${props.theme.color.error}`
      : null};
  border-radius: 8px;
  outline: none;
  width: 319px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSize.body3};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${(props) => props.theme.colorGray.white};
  background-color: ${(props) => props.theme.colorGray.bluegray700};
  &:focus {
    border: 1px solid ${(props) => props.theme.color.main};
  }
  &::placeholder {
    color: ${(props) => props.theme.colorGray.bluegray300};
  }
`;

const Label = styled.div`
  font-size: ${(props) => props.theme.fontSize.body3};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) => props.theme.colorGray.white};
  width: 319px;
  height: 20px;
  margin-bottom: 8px;
`;

const InputError = styled.div`
  width: 311px;
  height: 17px
  font-size: ${(props) => props.theme.fontSize.body3};
  color: ${(props) =>
    props.isError
      ? props.theme.color.error
      : props.isError === false
      ? props.theme.color.success
      : props.theme.color.main};

  margin-top: 8px;
`;

export default { Input, Label, InputError };
