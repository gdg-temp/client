import { CardLink } from './link';

export type Collection = CollectionInfo & {
  LinkInfoVOList: CardLink[];
};

export type CollectionInfo = {
  cardId: number;
  isMine: true;
  name: string;
  profileImage: string;
  email: string;
  introduction: string;
  styleTemplate: string;
  designTemplate: string;
  companyName: string;
  position: string;
};

export type UpdateCollectionInfoReq = Omit<CollectionInfo, 'cardId' | 'isMine'>;
