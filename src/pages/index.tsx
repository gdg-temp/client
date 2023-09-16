import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import axios from 'axios';
import type { ErrorResponse } from '@types';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>메인페이지</div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  user?: object;
}> = async (ctx) => {
  const cookies = ctx.req.headers.cookie;
  let status = 500;
  try {
    const response = await axios('http://localhost:3000/api/mock/user', {
      headers: {
        cookie: cookies,
      },
    });
    status = response.status;
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error) && error.response) {
      status = error.response.data.statusCode;
    }
  }
  if (status !== 200) return { props: {} };

  return {
    redirect: {
      destination: '/cards',
      statusCode: 301,
    },
  };
};
