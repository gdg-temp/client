import type { NextApiRequest, NextApiResponse } from 'next';
const mockImageUrl =
  'https://t1.kakaocdn.net/friends/new_store/prod/character/character_20230831184435_314c06bbed96419bb47f91a1665ab054.png';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const delay = (s: number) => new Promise((resolve) => setTimeout(resolve, s));
    await delay(500);
    res.status(200).json({
      imageUrl: mockImageUrl,
    });
  }
};

export default handler;
