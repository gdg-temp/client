import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { loginUser } from '@api';
import { KEY } from '@static';
import { useQuery } from '@tanstack/react-query';
import { getServerSideUserProps } from '@utils';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';

const NaverRedirect = () => {
  const [userState, setUserState] = useRecoilState(userAtom);
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: [KEY.USER],
    queryFn: () => loginUser({ oauthServerType: 'NAVER', code: router.query.code as string }),
  });
  useEffect(() => {
    if (!router.query.code) {
      router.replace('/login');
    }
    if (data) {
      setUserState(data);
      if (data.isFirst) router.replace('/signup');
      else router.replace('/cards');
    }
  }, [router, data, setUserState]);
  return <></>;
};

export default NaverRedirect;
export const getServerSideProps = getServerSideUserProps;
