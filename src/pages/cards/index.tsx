import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import { getNavLayout, getServerSideUserProps } from '@utils';
import { KEY } from '@static';
import { getCards } from '@api';
import { Loading } from '@components';

export default function CardsListPage() {
  const { data, isLoading, isError } = useQuery({ queryKey: [KEY.CARDS], queryFn: getCards });
  return (
    <>
      <Head>
        <title>Card List</title>
      </Head>
      {isError ? (
        <div>ERROR</div>
      ) : isLoading ? (
        <Loading />
      ) : (
        data.map((card) => <h1 key={card.encodeId}>{card.name}</h1>)
      )}
    </>
  );
}

CardsListPage.getLayout = getNavLayout;

export const getServerSideProps = getServerSideUserProps;
