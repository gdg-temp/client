import Head from 'next/head';
import { getServerSideUserProps } from '@utils';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>로그인 페이지</div>
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
