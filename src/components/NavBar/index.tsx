import { useState, ChangeEvent } from 'react';
import S from './Navbar.styled';
import { NavbarProps } from './types';
import Typography from '../Typography';
import SearchBar from '../SearchBar';

const NavBar = ({
  title,
  leadingButton = 'back',
  trailingButton,
  onClickLeft,
  onClickRight,
  showSearchBar,
  ...args
}: NavbarProps) => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleDeleteClick = () => {
    setSearchValue('');
  };

  return (
    <>
      <S.Navbar>
        <S.NavItemLeft leadingButton={leadingButton} onClick={onClickLeft} {...args} />
        {showSearchBar && (
          <SearchBar
            placeholder="검색어를 입력해주세요."
            value={searchValue}
            onChange={handleSearchInputChange}
            onClickDelete={handleDeleteClick}
            onClickSearch={() => {}}
            isWrite={searchValue.length > 0}
          />
        )}
        {!showSearchBar && (
          <>
            <S.Title>
              <Typography type="body4" grayColor="white">
                {title}
              </Typography>
            </S.Title>
            <S.NavItemRight trailingButton={trailingButton} onClick={onClickRight} {...args} />
          </>
        )}
      </S.Navbar>
    </>
  );
};

export default NavBar;
