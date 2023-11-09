import { CardLink } from './link';

export type Card = CardInfo & {
  LinkInfoVOList: CardLink[];
};

export type CardInfo = {
  cardId: number;
  encodeId: string;
  isMine: true;
  reasonTexts: ReasonTexts;
} & DefaultCardInfo;

export type DefaultCardInfo = {
  name: string;
  profileImage: string;
  email: string;
  introduction: string;
  styleTemplate: string;
  designTemplate: number;
  companyName: string;
  position: string;
};

export type ReasonTexts = string[];

export type UpdateCardInfoReq = Omit<CardInfo, 'cardId' | 'encodeId' | 'isMine'>;
