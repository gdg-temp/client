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
  width: 440px;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
`;

const SidebarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px 0px;
  background: ${({ theme }) => theme.colorGray.black};
`;

const SidebarContainer = styled.div`
  width: 221px;
  margin-bottom: 335px;
  margin-top: 33px;
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
  font-size: 14px;
  color: ${({ theme }) => theme.colorGray.blueGray300};
  height: 43.56px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-top: 33px;
  margin-bottom: 24px;
  padding: 0px 28px;
`;

const ButtonContainer = styled.div`
  padding: 0px 28px;
`;

const LoginIcon = styled.div<Pick<SideBarProps, 'loginIcon'>>`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  background: ${({ loginIcon }) => (loginIcon != null ? LOGIN_ICON[loginIcon] : null)};
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
  UserInfoContainer,
  ButtonContainer,
  LoginIcon,
  ContentContainer,
  ContentItems,
  ContentIcon,
};
