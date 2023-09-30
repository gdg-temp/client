import S from './Searchbar.styled';

import type { SearchBarProps } from './types';

const SearchBar = ({ placeholder, isWrite = false, onClick, ...args }: SearchBarProps) => {
  return (
    <S.SearchBar>
      <S.SearchBarInput placeholder={placeholder} {...args} />
      <S.DeleteIcon isWrite={isWrite} onClick={onClick} />
      <S.SearchIcon onClick={onClick} />
    </S.SearchBar>
  );
};

export default SearchBar;
