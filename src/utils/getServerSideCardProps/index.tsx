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
    card = cardResponse.data;
  } catch (error) {
    console.log('CARD ERROR');
  }
  try {
    const userResponse = await getUser(config);
    user = userResponse.data;
  } catch (error) {
    console.log('USER ERROR');
  }

  return {
    props: {
      user,
      card,
    },
  };
};

export default getServerSideCardProps;
