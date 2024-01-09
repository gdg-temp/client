import { NavBar, SideBar } from '@components';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { ReactElement, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getCards, getCollection } from '@api';
import { KEY } from '@static';
import { useQuery } from '@tanstack/react-query';
import { Card, Collection } from '@types';

const NavLayout = ({ onClickSearch }: { onClickSearch?: () => void }) => {
  const [userState, setUserState] = useRecoilState(userAtom);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const router = useRouter();
  const { data: cardsData } = useQuery<{ data: { data: Card[] } }, unknown>({
    queryKey: [KEY.CARDS],
    queryFn: getCards,
  });

  const { data: collectionData, isError } = useQuery<{ data: Collection[] }, unknown>({
    queryKey: [KEY.COLLECTION],
    queryFn: getCollection,
  });

  if (isError) {
    throw new Error('데이터를 가져오는데 실패하였습니다.');
  }

  const { pathname } = useRouter();

  useEffect(() => {
    setisSidebarOpen(false);
  }, [router.pathname]);

  return (
    <>
      <NavBar
        leadingButton="menu"
        trailingButton={pathname === '/cards' ? 'add' : undefined}
        showSearchBar={pathname === '/cards' ? false : true}
        onClickLeft={() => setisSidebarOpen(!isSidebarOpen)}
        onClickRight={() => router.push('/generation')}
      />
      {isSidebarOpen &&
        (userState.name ? (
          <SideBar
            isLogined={true}
            name={userState.name}
            loginIcon={userState.oauthServerType}
            myCardCnt={cardsData?.data.data.length}
            collectCardCnt={collectionData?.data.length}
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
    </>
  );
};

export default NavLayout;
