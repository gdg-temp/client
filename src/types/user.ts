export type User = {
  id?: number;
  name: string;
  email: string;
  isFirst?: boolean;
  oauthServerType: 'KAKAO' | 'NAVER' | 'GOOGLE';
};
