import { GetServerSideProps } from 'next';
import { getUser, getCard } from '@api';

import type { User, Card } from '@types';

const getServerSideCardProps: GetServerSideProps<{
  user?: User;
  card: Card;
}> = async (ctx) => {
  const cookies = ctx.req.headers.cookie;
  const config = {
    headers: {
      cookie: cookies,
    },
  };
  let user = {} as User;
  let card = {} as Card;
  try {
    const cardResponse = await getCard(ctx.query.id as string, config);
    const userResponse = await getUser(config);
    card = cardResponse.data;
    user = userResponse.data;
  } catch (error) {
    // TODO: 예외처리 필요
    return { props: { card, user } };
  }

  return {
    props: {
      user,
      card,
    },
  };
};

export default getServerSideCardProps;
