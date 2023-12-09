import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);

    res.status(200).json({
      data: {
        email: 'harry@kakao.com',
        name: 'Harry',
        oauthServerType: 'KAKAO',
        isFirst: true,
      },
    });
  }
};

export default handler;
