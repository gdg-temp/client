import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);
    res.setHeader('Set-Cookie', 'LYL_TOKEN=marry; path=/; HttpOnly');
    res.status(200).json({
      data: {
        email: 'marry@google.com',
        name: 'Marry',
        oauthServerType: 'GOOGLE',
        isFirst: false,
      },
    });
  }
};

export default handler;
