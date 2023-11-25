import Head from 'next/head';

import { getNavLayout, getServerSideUserProps } from '@utils';

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

SettingsPage.getLayout = getNavLayout;

export const getServerSideProps = getServerSideUserProps;
