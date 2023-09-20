import { GetServerSideProps } from 'next';
import { getUser } from '@api';

import type { User } from '@types';

const getServerSideUserProps: GetServerSideProps<{
  user?: User;
}> = async (ctx) => {
  const cookies = ctx.req.headers.cookie;
  const path = ctx.resolvedUrl;
  let user = {} as User;
  try {
    user = await getUser({
      headers: {
        cookie: cookies,
      },
    });
  } catch (error) {
    // 에러 및 로그인 X
    if (path === '/collections' || path === '/settings') {
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
    case '/generation':
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
