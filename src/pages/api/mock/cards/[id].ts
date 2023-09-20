import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);

    res.status(200).json({
      id: 77,
      name: 'string',
      email: 'string',
      workType: 'STUDENT',
      job: 'string',
      position: 'string',
      companyName: 'string',
      companyAddress: 'string',
      birth: '2023-09-17',
      templateURL: 'string',
    });
  }
};
export default handler;
