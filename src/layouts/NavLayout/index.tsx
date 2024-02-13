import { NavBar, SideBar } from '@components';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getCards, getCollection, postLogout } from '@api';
import { KEY } from '@static';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Card, Collection } from '@types';
import { AxiosError } from 'axios';
import { useToast } from '@hooks';

interface NavLayoutProps {
  searchText?: string;
  onSearchTextChange?: React.Dispatch<React.SetStateAction<string>>;
  onShowTextChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLayout: React.FC<NavLayoutProps> = ({
  searchText,
  onSearchTextChange,
  onShowTextChange,
}) => {
  const [userState, setUserState] = useRecoilState(userAtom);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const router = useRouter();
  const { data: cardsData } = useQuery<{ data: Card[] }, unknown>({
    queryKey: [KEY.CARDS],
    queryFn: getCards,
  });

  const { data: collectionData, isError } = useQuery<{ data: Collection[] }, unknown>({
    queryKey: [KEY.COLLECTION],
    queryFn: getCollection,
  });
  const { showToast } = useToast();

  if (isError) {
    throw new Error('데이터를 가져오는데 실패하였습니다.');
  }

  const { pathname } = useRouter();

  useEffect(() => {
    setisSidebarOpen(false);
  }, [router.pathname]);

  const { mutate } = useMutation<void, AxiosError>({
    mutationFn: postLogout,
  });

  const handleLogout = () => {
    mutate(undefined, {
      onSuccess: () => {
        router.push('/');
      },
      onError: () => {
        showToast('로그아웃 중 에러가 발생하였습니다.');
      },
    });
  };

  return (
    <>
      <NavBar
        leadingButton="menu"
        trailingButton={pathname === '/cards' ? 'add' : undefined}
        showSearchBar={pathname === '/cards' ? false : true}
        onClickLeft={() => setisSidebarOpen(!isSidebarOpen)}
        onClickRight={() => router.push('/generation')}
        searchText={searchText}
        onSearchTextChange={onSearchTextChange}
        onShowTextChange={onShowTextChange}
      />
      {isSidebarOpen &&
        (userState.name ? (
          <SideBar
            isLogined={true}
            name={userState.name}
            loginIcon={userState.oauthServerType}
            myCardCnt={cardsData?.data.length}
            collectCardCnt={collectionData?.data.length}
            onClose={() => setisSidebarOpen(!isSidebarOpen)}
            onClickLogout={handleLogout}
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
