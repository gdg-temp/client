import { CardLink } from './link';
import { DefaultCardInfo } from './card';

export type Collection = CollectionInfo & {
  LinkInfoVOList: CardLink[];
};

export type CollectionInfo = {
  cardId: number;
  encodeId: string;
  isMine: true;
} & DefaultCardInfo;

export type UpdateCollectionInfoReq = Omit<CollectionInfo, 'cardId' | 'isMine'>;
