import { CardLink } from './link';
import { DefaultCardInfo } from './card';

export type Collection = CollectionInfo & {
  linkInfoVOList: CardLink[];
};

export type CollectionInfo = {
  cardId: number;
  encodeId: string;
  isMine: true;
} & DefaultCardInfo;

export type UpdateCollectionInfoReq = Omit<CollectionInfo, 'cardId' | 'isMine'>;
