import { NavBar, SideBar } from '@components';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ReactElement, useState, useEffect } from 'react';
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

  const { pathname } = useRouter();

  useEffect(() => {
    setisSidebarOpen(false);
  }, [router.pathname]);

  return (
    <>
      <NavBar
        leadingButton="menu"
        trailingButton={pathname === '/cards' ? 'add' : undefined}
        showSearchBar={true}
        onClickLeft={() => setisSidebarOpen(!isSidebarOpen)}
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
