import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);
    const body = req.body;
    res.status(200).json({
      data: {
        encodeId: 'encodeId',
        cardId: 0,
        isMine: true,
        links: [],
        ...body,
      },
    });
  }
};

export default handler;
