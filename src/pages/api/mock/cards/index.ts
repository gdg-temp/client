import type { NextApiRequest, NextApiResponse } from 'next';

const mockCards = [
  {
    id: 0,
    name: '해리',
    email: 'test@test.com',
    workType: 'STUDENT',
    job: 'FE',
    position: 'FE',
    companyName: 'AAcompany',
    companyAddress: '',
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
  },
  {
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
  },
  {
    id: 55,
    name: '해리3',
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
  },
];
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);

    res.status(200).json(mockCards);
  }
};

export default handler;
