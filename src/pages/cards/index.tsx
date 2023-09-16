import Head from 'next/head';
import { getNavLayout } from '@utils';

export default function CardsListPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>카드 리스트 페이지</div>
    </>
  );
}

CardsListPage.getLayout = getNavLayout;
