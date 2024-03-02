import styled from 'styled-components';
import type { SideBarProps } from './types';

const LOGIN_ICON: Record<Required<SideBarProps>['loginIcon'], string> = {
  KAKAO: "url('/icons/kakao_mini.svg') 50% 50% no-repeat",
  GOOGLE: "url('/icons/google_mini.svg') 50% 50% no-repeat",
  NAVER: "url('/icons/naver_mini.svg') 50% 50% no-repeat",
};

const SidebarBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
`;

const SidebarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px 0px;
  background: #1e1e1e;
`;

const SidebarContainer = styled.div`
  width: 221px;
  margin-bottom: 335px;
`;

const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  background: url('/icons/Delete_simple.svg') no-repeat;
  fill: ${({ theme }) => theme.colorGray.blueGray400};
  margin-left: 180px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  display: flex;
  font-size: 14px;
  color: ${({ theme }) => theme.colorGray.blueGray300};
  height: 43.56px;
  padding: 0 28px;
  align-items: center;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 33px 28px 24px 28px;
`;

const UserCardContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ButtonContainer = styled.div`
  padding: 0px 28px;
`;

const LoginIcon = styled.div<Pick<SideBarProps, 'loginIcon'>>`
  width: 16px;
  height: 16px;
  background: ${({ loginIcon }) => (loginIcon != null ? LOGIN_ICON[loginIcon] : null)};
  flex-shrink: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 221px;
`;

const ContentItems = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  padding: 16px 28px;
  color: ${({ theme }) => theme.colorGray.white};
  cursor: pointer;
  &:hover {
    background: #343436;
  }
`;

const ContentIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export default {
  SidebarBackground,
  SidebarWrapper,
  SidebarContainer,
  CloseButton,
  LogoutButton,
  UserContainer,
  UserCardContainer,
  UserInfoContainer,
  ButtonContainer,
  LoginIcon,
  ContentContainer,
  ContentItems,
  ContentIcon,
};
