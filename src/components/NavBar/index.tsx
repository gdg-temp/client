import S from './Navbar.styled';
import { NavbarProps } from './types';
import Typography from '../Typography';

const NavBar = ({
  title,
  leadingButton,
  trailingButton,
  onClickLeftBtn,
  onClickRightBtn,
  ...args
}: NavbarProps) => {
  return (
    <>
      <S.Navbar>
        <S.NavItemLeft leadingButton={leadingButton} onClick={onClickLeftBtn} {...args} />
        <S.Title>
          <Typography type="body4" grayColor="white">
            {title}
          </Typography>
        </S.Title>
        <S.NavItemRight trailingButton={trailingButton} onClick={onClickRightBtn} {...args} />
      </S.Navbar>
    </>
  );
};

export default NavBar;
