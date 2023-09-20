import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);
    if (req.query.code === '0000') {
      res.status(200).json({
        email: 'jarry@kakao.com',
        name: 'Jarry',
        oauthServerType: 'KAKAO',
        isFirst: true,
      });
    } else {
      res.status(200).json({
        email: 'harry@kakao.com',
        name: 'Harry',
        oauthServerType: 'KAKAO',
        isFirst: false,
      });
    }
  }
};

export default handler;
