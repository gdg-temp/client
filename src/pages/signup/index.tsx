import Head from 'next/head';

import { getServerSideUserProps } from '@utils';

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>가입 페이지</div>
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
