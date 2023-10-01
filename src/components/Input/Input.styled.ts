import styled from 'styled-components';
import type { InputProps } from './types';

const Input = styled.input<InputProps>`
  padding: 14px 16px;
  border: ${(props) =>
    props.colorType === undefined
      ? 'none'
      : props.colorType === 'error'
      ? `1px solid ${props.theme.color.error}`
      : `1px solid ${props.theme.color.success}`};
  border-radius: 8px;
  outline: none;
  width: 319px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSize.body3};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colorGray.white};
  background-color: ${({ theme }) => theme.colorGray.blueGray700};
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.main};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colorGray.blueGray300};
  }
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body3};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colorGray.white};
  width: 319px;
  height: 20px;
  margin-bottom: 8px;
`;

const InputError = styled.div<Pick<InputProps, 'colorType'>>`
  width: 311px;
  height: 17px;
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${(props) =>
    props.colorType === undefined
      ? props.theme.color.main
      : props.colorType === 'error'
      ? props.theme.color.error
      : props.theme.color.success};
  margin-top: 8px;
`;

export default { Input, Label, InputError };
