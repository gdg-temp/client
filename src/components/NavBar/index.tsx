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
  return (
    <>
      <S.Navbar>
        <S.NavItemLeft leadingButton={leadingButton} onClick={onClickLeft} {...args} />
        {showSearchBar && <SearchBar />}
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
