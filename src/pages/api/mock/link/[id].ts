import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === 'POST' || req.method === 'PATCH') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);
    const body = req.body;
    res.status(200).json({
      id: 0,
      ...body,
    });
  }
  if (req.method === 'DELETE') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);
    const body = req.body;
    res.status(200).json({});
  }
};

export default handler;
