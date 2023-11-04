import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);

    const token = req.cookies['LYL_TOKEN'];
    if (!token) {
      res.status(401).json({
        statusCode: 401,
        message: 'error',
      });
    } else {
      res.status(200).json({
        id: 0,
        email: `${token}@kakao.com`,
        name: token,
        oauthServerType: 'KAKAO',
      });
    }
  }
};

export default handler;
