import { CardLink } from './link';

export type Card = CardInfo & {
  links: CardLink[];
};

export type CardInfo = {
  cardId: number;
  encodeId: string;
  isMine: true;
} & DefaultCardInfo;

export type DefaultCardInfo = {
  name: string;
  profileImage: string;
  email: string;
  introduction: string;
  styleTemplate: StyleType;
  designTemplate: string;
  companyName: string;
  position: string;
};

export type UpdateCardInfoReq = Omit<CardInfo, 'cardId' | 'encodeId' | 'isMine'>;

export type StyleType = 'default' | 'city' | 'character' | 'future' | 'line' | 'soft';
