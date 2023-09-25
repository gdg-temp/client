import styled from 'styled-components';

import type { NavbarProps } from './types';

const LEFT_ICON: Record<Required<NavbarProps>['leadingButton'], string> = {
  back: "url('/icons/CaretLeft_24px.svg') 50% 50% no-repeat",
};
const RIGHT_ICON: Record<Required<NavbarProps>['trailingButton'], string> = {
  home: "url('/icons/Home.svg') 50% 50% no-repeat",
  save: "url('/icons/Save.svg') 50% 50% no-repeat",
};

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colorGray.blueGray700};
  width: 375px;
  height: 64px;
  padding: 18px 24px;
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
  font-size: ${({ theme }) => theme.fontSize.body2};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colorGray.white};
  background: ${({ theme }) => theme.colorGray.black};
  text-align: center;
`;

export default { Navbar, NavItemLeft, NavItemRight, Title };
