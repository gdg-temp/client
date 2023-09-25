import S from './Navbar.styled';
import { NavbarProps } from './types';

const NavBar = ({ title, leadingButton, trailingButton, onClick, ...args }: NavbarProps) => {
  return (
    <>
      <S.Navbar>
        <S.NavItemLeft leadingButton={leadingButton} onClick={onClick} {...args} />
        <S.Title>{title}</S.Title>
        <S.NavItemRight trailingButton={trailingButton} onClick={onClick} {...args} />
      </S.Navbar>
    </>
  );
};

export default NavBar;
