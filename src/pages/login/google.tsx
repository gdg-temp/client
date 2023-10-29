import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { loginUser } from '@api';
import { KEY } from '@static';
import { useQuery } from '@tanstack/react-query';
import { getServerSideUserProps } from '@utils';

const GoogleRedirect = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: [KEY.USER],
    queryFn: () => loginUser({ oauthServerType: 'GOOGLE', code: router.query.code as string }),
  });
  useEffect(() => {
    if (!router.query.code) {
      router.replace('/login');
    }
    if (data?.isFirst) {
      //TODO:  생성시 필요한 데이터 아톰에 저장
      router.replace('/signup');
    }
  }, [router, data]);
  return <></>;
};

export default GoogleRedirect;
export const getServerSideProps = getServerSideUserProps;
