import { CardLink } from './link';

export type Card = CardInfo & {
  LinkInfoVOList: CardLink[];
};

export type CardInfo = {
  cardId: number;
  encodeId: string;
  isMine: true;
  name: string;
  profileImage: string;
  email: string;
  introduction: string;
  styleTemplate: string;
  designTemplate: string;
  companyName: string;
  position: string;
  reasonTexts: string[];
};

export type UpdateCardInfoReq = Omit<CardInfo, 'cardId' | 'encodeId' | 'isMine'>;
