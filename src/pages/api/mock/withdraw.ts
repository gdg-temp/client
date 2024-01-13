import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);
    res.setHeader('Set-Cookie', 'LYL_TOKEN=; Max-Age=0; path=/; HttpOnly');
    res.status(200).json({});
  }
};

export default handler;
