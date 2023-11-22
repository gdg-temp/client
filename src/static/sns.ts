import { LinkType } from '@types';

export const SNS_TYPE: { [key in LinkType]: string } = {
  custom: '직접입력',
  github: 'GitHub',
  behance: 'Behance',
  tistory: 'Tistory',
  linkedin: 'LinkedIn',
  naverblog: 'Naver Blog',
  instagram: 'Instagram',
  notion: 'Notion',
  medium: 'Medium',
  x: 'X',
  thread: 'Thread',
  youtube: 'Youtube',
  tiktok: 'Tiktok',
};
