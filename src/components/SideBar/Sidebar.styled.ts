import styled from 'styled-components';
import type { SideBarProps } from './types';

const CONTENT_ICON: Record<Required<SideBarProps>['contentIcon'], string> = {
  alarm: "url('/icons/Alarm.svg') 50% 50% no-repeat",
  briefcase: "url('/icons/Briefcase.svg') 50% 50% no-repeat",
  mycard: "url('/icons/mycard.svg') 50% 50% no-repeat",
  setting: "url('/icons/Setting.svg') 50% 50% no-repeat",
};

const LOGIN_ICON: Record<Required<SideBarProps>['loginIcon'], string> = {
  kakao: "url('/icons/Kakao.svg') 50% 50% no-repeat",
  google: "url('/icons/Google.svg') 50% 50% no-repeat",
  naver: "url('/icons/Naver.svg') 50% 50% no-repeat",
};

const SidebarBackground = styled.div`
  position: fixed;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
`;

const SidebarWrapper = styled.div`
  position: absolute;
  height: 812px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 40px 0px;
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
  margin-left: 180px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  font-size: 14px;
  font-weight: medium;
  color: ${({ theme }) => theme.colorGray.blueGray300};
  height: 43.56px;
  padding: 16px 28px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  margin-bottom: 24px;
  padding: 0px 28px;
  background: ${({ theme }) => theme.colorGray.black};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 28px;
  gap: 12px;
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

const ContentIcon = styled.div<Pick<SideBarProps, 'contentIcon'>>`
  background: ${({ contentIcon }) => (contentIcon != null ? CONTENT_ICON[contentIcon] : null)};
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
