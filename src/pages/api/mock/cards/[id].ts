import type { NextApiRequest, NextApiResponse } from 'next';
import { Card } from '@types';

const mockData: Card = {
  cardId: 10,
  encodeId: 'encodeId-1',
  name: '해리2',
  email: 'haesoo9410@naver.com',
  position: 'FE Developer',
  companyName: 'kakao enterprise',
  designTemplate: '3',
  styleTemplate: 'default',
  introduction: '윤해수입니다.',
  isMine: true,
  profileImage:
    'https://img1.kakaocdn.net/thumb/R296x0@2x.q82/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fmain_tab%2Ffeed%2Fmedia%2Fmedia_0_20220125144239.jpg',
  links: [
    {
      id: 0,
      linkType: 'instagram',
      linkUrl: 'https://www.instagram.com/',
      linkText: 'instagram',
    },
    {
      id: 1,
      linkType: 'youtube',
      linkUrl: 'https://www.youtube.com/',
      linkText: 'youtube',
    },
  ],
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
  await delay(500);
  switch (req.method) {
    case 'GET':
      res.status(200).json({ data: { ...mockData, id: id as string, name: `해리-${id}` } });
      break;

    case 'POST':
      res.status(200).json({
        data: {
          ...mockData,
          ...req.body,
        },
      });
      break;

    case 'PUT':
      res.status(200).json({
        data: {
          ...mockData,
          ...req.body,
          encodeId: id,
        },
      });
      break;

    case 'DELETE':
      res.status(200).json({});
      break;

    default:
      break;
  }
};
export default handler;
