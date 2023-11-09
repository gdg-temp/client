import S from './Navbar.styled';
import { NavbarProps } from './types';
import Typography from '../Typography';

const NavBar = ({
  title,
  leadingButton = 'back',
  trailingButton,
  onClickLeft,
  onClickRight,
  ...args
}: NavbarProps) => {
  return (
    <>
      <S.Navbar>
        <S.NavItemLeft leadingButton={leadingButton} onClick={onClickLeft} {...args} />
        <S.Title>
          <Typography type="body4" grayColor="white">
            {title}
          </Typography>
        </S.Title>
        <S.NavItemRight trailingButton={trailingButton} onClick={onClickRight} {...args} />
      </S.Navbar>
    </>
  );
};

export default NavBar;
