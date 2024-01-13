import { GetServerSideProps } from 'next';
import axios from 'axios';
import { ResponseData } from 'src/api/types';

import type { User } from '@types';

const getServerSideUserProps: GetServerSideProps<{
  user?: User;
}> = async (ctx) => {
  const cookies = ctx.req.headers.cookie;
  if (!cookies?.includes('QA_TEST_TOKEN=TEST')) throw new Error('점검중');
  const path = ctx.resolvedUrl;
  const config = {
    headers: {
      cookie: cookies,
    },
  };
  const isOnlyLoggedInPage =
    path === '/collections' || path === '/cards' || path === '/settings' || path.includes('edit');

  let user = {} as User;
  try {
    const { data: userResponse } = await axios.get<ResponseData<User>>(
      `${process.env.NEXT_PUBLIC_API_URL}/user`,
      config,
    );
    user = userResponse.data;
  } catch (error) {
    // 에러 및 로그인 X
    if (isOnlyLoggedInPage) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    return { props: {} };
  }
  switch (path) {
    case '/':
    case '/login':
      return {
        // 로그인 되어있을 경우 카드리스트 페이지
        redirect: {
          destination: '/cards',
          permanent: false,
        },
      };

    default:
      return {
        props: {
          user,
        },
      };
  }
};

export default getServerSideUserProps;
