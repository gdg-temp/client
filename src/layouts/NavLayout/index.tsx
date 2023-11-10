import { NavBar, SideBar } from '@components';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ReactElement, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getCards, getCollection } from '@api';
import { KEY } from '@static';
import { useQuery } from '@tanstack/react-query';

const ContentLayout = styled.div`
  margin-top: 64px;
`;

const NavLayout = ({ children }: { children: ReactElement }) => {
  const [userState, setUserState] = useRecoilState(userAtom);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const router = useRouter();
  const cardsData = useQuery({
    queryKey: [KEY.CARDS],
    queryFn: () => getCards(),
  });

  const collectionData = useQuery({
    queryKey: [KEY.COLLECTION],
    queryFn: () => getCollection(),
  });

  // 페이지에 따른 네비게이션바 설정 필요
  return (
    <>
      <NavBar
        leadingButton="menu"
        trailingButton="add"
        onClickLeft={() => setisSidebarOpen(!isSidebarOpen)}
        onClickRight={() => router.push('/generation')}
      />
      {isSidebarOpen &&
        (userState.name ? (
          <SideBar
            isLogined={true}
            name={userState.name}
            loginIcon={userState.oauthServerType}
            myCardCnt={cardsData.data?.length}
            collectCardCnt={collectionData.data?.length}
            onClose={() => setisSidebarOpen(!isSidebarOpen)}
            onClickLogout={() => {}}
          />
        ) : (
          <SideBar
            isLogined={false}
            onClickLogin={() => router.push('/login')}
            onClose={() => setisSidebarOpen(!isSidebarOpen)}
          />
        ))}
      <ContentLayout>{children}</ContentLayout>
    </>
  );
};

export default NavLayout;
