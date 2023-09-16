import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);

    const isAllowedUser = Object.hasOwn(req.cookies, 'LYL_TOKEN');
    if (!isAllowedUser) {
      res.status(401).json({
        statusCode: 401,
        message: 'error',
      });
    } else {
      res.status(200).json({
        email: 'harry@kakao.com',
        name: 'Harry',
        oauthServerType: 'KAKAO',
      });
    }
  }
};

export default handler;
