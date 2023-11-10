import S from './Sidebar.styled';
import Typography from '../Typography';
import type { SideBarProps } from './types';
import { Button } from '@components';
import { useRouter } from 'next/router';

const SideBar = ({
  onClose,
  name,
  loginIcon,
  isLogined = false,
  myCardCnt = 0,
  collectCardCnt = 0,
  onClickLogin,
  onClickLogout,
}: SideBarProps) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  const preventPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const router = useRouter();

  const menuItems: {
    id: number;
    label: string;
    contentIcon: string;
    handlerouter: () => void;
  }[] = [
    {
      id: 1,
      label: '내소식',
      contentIcon: '/icons/Alarm.svg',
      handlerouter: () => router.push('/'),
    },
    {
      id: 2,
      label: '내 명함',
      contentIcon: '/icons/Briefcase.svg',
      handlerouter: () => router.push('/cards'),
    },
    {
      id: 3,
      label: '명함 수집',
      contentIcon: '/icons/mycard.svg',
      handlerouter: () => router.push('/collections'),
    },
    {
      id: 4,
      label: '환경설정',
      contentIcon: '/icons/Setting.svg',
      handlerouter: () => router.push('/settings'),
    },
  ];

  return (
    <>
      <>
        <S.SidebarBackground onClick={handleBackgroundClick}>
          <S.SidebarWrapper onClick={preventPropagation}>
            <S.CloseButton onClick={onClose}></S.CloseButton>
            {isLogined ? (
              <>
                <S.SidebarContainer>
                  <S.UserInfoContainer>
                    <Typography type="title2" grayColor="white">
                      {name}
                    </Typography>
                    <S.LoginIcon loginIcon={loginIcon} />
                  </S.UserInfoContainer>
                  <S.UserInfoContainer>
                    <Typography systemColor="main" type="caption1">
                      {myCardCnt}
                    </Typography>
                    <Typography grayColor="blueGray300" type="caption1">
                      내 명함
                    </Typography>
                    <Typography systemColor="main" type="caption1">
                      {collectCardCnt}
                    </Typography>
                    <Typography grayColor="blueGray300" type="caption1">
                      수집 명함
                    </Typography>
                  </S.UserInfoContainer>
                  <S.ContentContainer>
                    {menuItems.map((menuItem) => (
                      <S.ContentItems key={menuItem.id} onClick={menuItem.handlerouter}>
                        <S.ContentIcon src={menuItem.contentIcon} />
                        <Typography type={'body3'} grayColor={'white'}>
                          {menuItem.label}
                        </Typography>
                      </S.ContentItems>
                    ))}
                  </S.ContentContainer>
                </S.SidebarContainer>
                <S.LogoutButton onClick={onClickLogout}>{'로그아웃'}</S.LogoutButton>
              </>
            ) : (
              <>
                <S.SidebarContainer>
                  <S.UserInfoContainer>
                    <Typography type="title2" grayColor="white">
                      로그인 후 서비스 이용하기
                    </Typography>
                  </S.UserInfoContainer>
                  <S.ButtonContainer>
                    <Button size="medium" color="primary" onClick={onClickLogin}>
                      로그인
                    </Button>
                  </S.ButtonContainer>
                </S.SidebarContainer>
              </>
            )}
          </S.SidebarWrapper>
        </S.SidebarBackground>
      </>
    </>
  );
};

export default SideBar;
