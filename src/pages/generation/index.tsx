import Head from 'next/head';

import { getServerSideUserProps } from '@utils';
import { useRecoilState } from 'recoil';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function GenerationPage() {
  const [userState, setUserState] = useRecoilState(userAtom);
  const router = useRouter();
  useEffect(() => {
    if (!userState.email) router.push('/login');
  }, [router, userState]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>생성 페이지</div>
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
