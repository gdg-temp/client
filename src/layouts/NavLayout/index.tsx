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
import { useToast, useModal } from '@hooks';

interface NavLayoutProps {
  searchText?: string;
  onSearchTextChange?: React.Dispatch<React.SetStateAction<string>>;
  onShowTextChange?: React.Dispatch<React.SetStateAction<boolean>>;
  cardLength?: number;
}

const NavLayout: React.FC<NavLayoutProps> = ({
  searchText,
  onSearchTextChange,
  onShowTextChange,
  cardLength,
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
  const { open, close } = useModal();

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

  const handleGeneration = (cardLength?: number) => {
    if (cardLength && cardLength > 4) {
      open({
        content: '5개 이상 명함을 생성할 수 없습니다.',
        buttonType: 'oneButton',
        buttonTitle: '확인',
        onClick: close,
        onClose: close,
      });
    } else {
      router.push('/generation');
    }
  };

  return (
    <>
      <NavBar
        leadingButton="menu"
        trailingButton={pathname === '/cards' ? 'add' : undefined}
        showSearchBar={pathname === '/cards' ? false : true}
        onClickLeft={() => setisSidebarOpen(!isSidebarOpen)}
        onClickRight={() => handleGeneration(cardLength)}
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
