import Head from 'next/head';

import { getServerSideUserProps } from '@utils';

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>환경설정 페이지</div>
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
