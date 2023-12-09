import Head from 'next/head';
import { getServerSideUserProps } from '@utils';

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

export const getServerSideProps = getServerSideUserProps;
