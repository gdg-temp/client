import type { NextApiRequest, NextApiResponse } from 'next';
import { Card } from '@types';

const mockData: Card = {
  cardId: 10,
  encodeId: 'encodeId-1',
  name: '해리2',
  email: 'string',
  position: 'STUDENT',
  companyName: 'string',
  designTemplate: 1,
  styleTemplate: 'default',
  introduction: '',
  isMine: true,
  profileImage: '',
  reasonTexts: [],
  LinkInfoVOList: [
    {
      id: 0,
      linkType: 'instagram',
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
        ...mockData,
        ...req.body,
      });
      break;
    default:
      break;
  }
};
export default handler;
