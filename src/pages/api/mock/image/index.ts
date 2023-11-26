import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);
    const body = req.body;
    res.status(200).json({
      data: {
        imageUrl:
          'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210826110030.jpg',
      },
    });
  }
};

export default handler;
