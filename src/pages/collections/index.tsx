import Head from 'next/head';
import { getNavLayout } from '@utils';

export default function CollectionsPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>보관함 페이지</div>
    </>
  );
}

CollectionsPage.getLayout = getNavLayout;
