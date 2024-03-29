import styled from 'styled-components';
import type { SearchBarProps } from './types';

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  width: 264px;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colorGray.blueGray700};
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.color.main};
  }
`;

const SearchBarInput = styled.input<Pick<SearchBarProps, 'placeholder'>>`
  width: 160px;
  height: 20px;
  color: ${({ theme }) => theme.colorGray.white};
  background: rgba(0, 0, 0, 0);
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

const SearchIcon = styled.div<Pick<SearchBarProps, 'onClick'>>`
  width: 24px;
  height: 24px;
  background: url('/icons/Search.svg') 50% 50% no-repeat;
  cursor: pointer;
`;

const DeleteIcon = styled.div<Pick<SearchBarProps, 'onClick'>>`
  width: 24px;
  height: 24px;
  background: url('/icons/Delete_gray.svg') 50% 50% no-repeat;
  cursor: pointer;
`;

const SearchDropdownWrapper = styled.div`
  position: absolute;
  width: 264px;
  left: 100px;
  top: 105px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colorGray.blueGray700};
  z-index: 100;
  @media screen and (min-width: 768px) {
    left: 140px;
  }
`;

const DropdownProfile = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  object-fit: cover;
`;

export default {
  SearchBar,
  SearchBarInput,
  SearchIcon,
  DeleteIcon,
  SearchDropdownWrapper,
  DropdownProfile,
};
