import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { User } from '@types';
import S from './DefaultLayout.styled';
import { useRouter } from 'next/router';

interface DefaultLayoutProps {
  children: ReactNode;
  pageProps: { user: User };
}

const DefaultLayout = ({ children, pageProps }: DefaultLayoutProps) => {
  const [userState, setUserState] = useRecoilState(userAtom);

  const { pathname } = useRouter();

  useEffect(() => {
    if (pageProps.user) {
      setUserState(pageProps.user);
    }
  }, []);
  if (pathname.startsWith('/login')) return <S.LoginLayoutWrapper>{children}</S.LoginLayoutWrapper>;
  if (pathname === '/') return <S.LandingLayoutWrapper>{children}</S.LandingLayoutWrapper>;
  return <S.DefaultLayoutWrapper>{children}</S.DefaultLayoutWrapper>;
};

export default DefaultLayout;
