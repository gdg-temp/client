import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { loginUser } from '@api';
import { KEY } from '@static';
import { useQuery } from '@tanstack/react-query';
import { getServerSideUserProps } from '@utils';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';

const KakaoRedirect = () => {
  const [userState, setUserState] = useRecoilState(userAtom);
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: [KEY.USER],
    queryFn: () => loginUser({ oauthServerType: 'KAKAO', code: router.query.code as string }),
  });
  if (isError) {
    throw new Error('데이터를 가져오는데 실패하였습니다.');
  }
  useEffect(() => {
    if (!router.query.code) {
      router.replace('/login');
    }
    if (data) {
      setUserState(data.data);
      if (data.data.isFirst) router.replace('/signup');
      else router.replace('/cards');
    }
  }, [router, data, setUserState]);
  return <></>;
};

export default KakaoRedirect;
export const getServerSideProps = getServerSideUserProps;
