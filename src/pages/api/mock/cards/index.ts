import type { NextApiRequest, NextApiResponse } from 'next';
import { Card } from '@types';
import { ResponseData } from 'src/api/types';

const mockCards: ResponseData<Card[]> = {
  success: true,
  status: 200,
  data: [
    {
      cardId: 10,
      encodeId: 'encodeId-1',
      name: '해리2',
      email: 'string',
      position: 'STUDENT',
      companyName: 'string',
      designTemplate: '2',
      styleTemplate: 'line',
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
    },
    {
      cardId: 10,
      encodeId: 'encodeId-1',
      name: '해리2',
      email: 'string',
      position: 'STUDENT',
      companyName: 'string',
      designTemplate: '1',
      styleTemplate: 'soft',
      introduction: '',
      isMine: true,
      profileImage: '',
      reasonTexts: [],
      LinkInfoVOList: [
        {
          id: 0,
          linkType: 'custom',
          linkUrl: 'string',
          linkText: 'string',
        },
      ],
    },
    {
      cardId: 10,
      encodeId: 'encodeId-1',
      name: '해리2',
      email: 'string',
      position: 'STUDENT',
      companyName: 'string',
      designTemplate: '2',
      styleTemplate: 'city',
      introduction: '',
      isMine: true,
      profileImage: '',
      reasonTexts: [],
      LinkInfoVOList: [
        {
          id: 0,
          linkType: 'youtube',
          linkUrl: 'string',
          linkText: 'string',
        },
      ],
    },
  ],
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);

    res.status(200).json({ data: mockCards });
  }
};

export default handler;
