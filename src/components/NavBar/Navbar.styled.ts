import styled from 'styled-components';

import type { NavbarProps } from './types';

const LEFT_ICON: Record<Required<NavbarProps>['leadingButton'], string> = {
  back: "url('/icons/CaretLeft_24px.svg') 50% 50% no-repeat",
  menu: "url('/icons/Menu.svg') 50% 50% no-repeat",
};
const RIGHT_ICON: Record<Required<NavbarProps>['trailingButton'], string> = {
  add: "url('/icons/Add.svg') 50% 50% no-repeat",
  flip: "url('/icons/Flip.svg') 50% 50% no-repeat",
};

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 64px;
  padding: 18px 0;
`;
3;
const NavItemLeft = styled.div<NavbarProps>`
  background: ${({ leadingButton }) => (leadingButton != null ? LEFT_ICON[leadingButton] : null)};
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const NavItemRight = styled.div<NavbarProps>`
  background: ${({ trailingButton }) =>
    trailingButton != null ? RIGHT_ICON[trailingButton] : null};
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.div<NavbarProps>`
  text-align: center;
`;

export default { Navbar, NavItemLeft, NavItemRight, Title };
