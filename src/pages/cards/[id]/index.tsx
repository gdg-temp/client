import Head from 'next/head';
import { getNavLayout } from '@utils';

export default function CardDetailPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>단일 카드 페이지</div>
    </>
  );
}

CardDetailPage.getLayout = getNavLayout;
