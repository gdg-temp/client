import Head from 'next/head';

import { getServerSideUserProps } from '@utils';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Link Your Link</title>
      </Head>
      <div>메인페이지</div>
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
