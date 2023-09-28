import S from './Searchbar.styled';

import type { SearchBarProps } from './types';

const SearchBar = ({
  id,
  type,
  placeholder,
  isWrite = false,
  onClick,
  ...args
}: SearchBarProps) => {
  return (
    <S.SearchBar>
      <S.SearchBarInput id={id} type={type} placeholder={placeholder} onClick={onClick} {...args} />
      <S.DeleteIcon isWrite={isWrite} />
      <S.SearchIcon />
    </S.SearchBar>
  );
};

export default SearchBar;
