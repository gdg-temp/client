import S from './Searchbar.styled';

import type { SearchBarProps } from './types';

const SearchBar = ({
  placeholder,
  isWrite = false,
  onClickDelete,
  onClickSearch,
  ...args
}: SearchBarProps) => {
  return (
    <S.SearchBar>
      <S.SearchBarInput placeholder={placeholder} {...args} />
      {isWrite && <S.DeleteIcon onClick={onClickDelete} />}
      <S.SearchIcon onClick={onClickSearch} />
    </S.SearchBar>
  );
};

export default SearchBar;
