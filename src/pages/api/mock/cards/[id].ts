import type { NextApiRequest, NextApiResponse } from 'next';

const mockData = {
  id: 10,
  name: '해리2',
  email: 'string',
  workType: 'STUDENT',
  job: 'string',
  position: 'string',
  companyName: 'string',
  companyAddress: 'string',
  birth: '1999-09-09',
  templateURL: 'string',
  links: [
    {
      id: 0,
      linkType: 'INSTAGRAM',
      linkUrl: 'string',
      linkText: 'string',
    },
  ],
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
  await delay(500);
  switch (req.method) {
    case 'GET':
      res.status(200).json({ ...mockData, id: id as string, name: `해리-${id}` });
      break;

    case 'POST':
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
      break;
    default:
      break;
  }
};
export default handler;
