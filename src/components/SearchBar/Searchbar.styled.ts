import styled from 'styled-components';
import type { SearchBarProps } from './types';

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 14px 16px;
  width: 264px;
  height: 48px;
  background: ${({ theme }) => theme.colorGray.blueGray700};
  border-radius: 8px;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.color.main};
  }
`;

const SearchBarInput = styled.input<SearchBarProps>`
  width: 232px;
  height: 20px;
  background: ${({ theme }) => theme.colorGray.blueGray700};
  color: ${({ theme }) => theme.colorGray.white};
  font-size: ${({ theme }) => theme.fontSize.body3};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colorGray.blueGray300};
  }
`;

const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  background: url('/icons/Search.svg') 50% 50% no-repeat;
`;

const DeleteIcon = styled.div<SearchBarProps>`
  width: 24px;
  height: 24px;
  background: ${({ isWrite }) =>
    isWrite != false ? `url('/icons/Delete_gray.svg') 50% 50% no-repeat` : null};
`;

export default { SearchBar, SearchBarInput, SearchIcon, DeleteIcon };
