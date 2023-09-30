import S from './Navbar.styled';
import { NavbarProps } from './types';
import Typography from '../Typography';

const NavBar = ({ title, leadingButton, trailingButton, onClick, ...args }: NavbarProps) => {
  return (
    <>
      <S.Navbar>
        <S.NavItemLeft leadingButton={leadingButton} onClick={onClick} {...args} />
        <S.Title>
          <Typography type="body2" grayColor="white">
            {title}
          </Typography>
        </S.Title>
        <S.NavItemRight trailingButton={trailingButton} onClick={onClick} {...args} />
      </S.Navbar>
    </>
  );
};

export default NavBar;
