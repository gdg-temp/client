import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { User } from '@types';

interface DefaultLayoutProps {
  children: ReactNode;
  pageProps: { user: User };
}

const DefaultLayout = ({ children, pageProps }: DefaultLayoutProps) => {
  const [userState, setUserState] = useRecoilState(userAtom);
  useEffect(() => {
    if (pageProps.user) {
      setUserState(pageProps.user);
    }
  }, []);
  return <>{children}</>;
};

export default DefaultLayout;
