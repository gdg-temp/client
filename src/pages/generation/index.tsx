import Head from 'next/head';

import { getServerSideUserProps } from '@utils';

export default function GenerationPage() {
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
