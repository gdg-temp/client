import { GetServerSideProps } from 'next';
import axios from 'axios';
import { ResponseData } from 'src/api/types';

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
    const { data: cardResponse } = await axios.get<ResponseData<Card>>(
      `${process.env.NEXT_PUBLIC_API_URL}/cards/${ctx.query.id}`,
    );
    card = cardResponse.data;
  } catch (error) {
    console.log('CARD ERROR');
  }
  try {
    const { data: userResponse } = await axios.get<ResponseData<User>>(
      `${process.env.NEXT_PUBLIC_API_URL}/user`,
      config,
    );
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
