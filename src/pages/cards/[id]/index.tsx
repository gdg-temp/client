import Head from 'next/head';
import { getServerSideCardProps } from '@utils';
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType } from 'next';

export default function CardDetailPage({
  user,
  card,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    query: { id },
    push,
  } = useRouter();
  const handleClickButton = () => {
    push(`/cards/${id}/edit`);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>{`단일 카드 페이지 : ${card.name}`}</div>
      <button onClick={handleClickButton}>수정하기</button>
    </>
  );
}

export const getServerSideProps = getServerSideCardProps;
