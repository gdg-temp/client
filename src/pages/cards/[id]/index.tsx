import Head from 'next/head';
import { getNavLayout, getServerSideUserProps } from '@utils';
import { useRouter } from 'next/router';

export default function CardDetailPage() {
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
      <div>{`단일 카드 페이지 : ${id}`}</div>
      <button onClick={handleClickButton}>수정하기</button>
    </>
  );
}

CardDetailPage.getLayout = getNavLayout;
export const getServerSideProps = getServerSideUserProps;
