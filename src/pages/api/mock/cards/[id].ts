import type { NextApiRequest, NextApiResponse } from 'next';
import { Card } from '@types';

const mockData: Card = {
  cardId: 10,
  encodeId: 'encodeId-1',
  name: '해리2',
  email: 'haesoo9410@naver.com',
  position: 'FE Developer',
  companyName: 'kakao enterprise',
  designTemplate: 3,
  styleTemplate: 'default',
  introduction: '윤해수입니다.',
  isMine: true,
  profileImage: '',
  reasonTexts: [
    '프로필 링크를 공유하고 싶어요',
    '그냥 나라는 사람을 자랑하고 싶어요',
    '다양한 업계 사람들과 소통하고 싶어요',
  ],
  LinkInfoVOList: [
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
          encodedId: id,
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
