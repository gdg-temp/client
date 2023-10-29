import { atom } from 'recoil';
import { KEY } from '@static';

import type { UpdateCardInfoReq, UpdateCardLinkReq } from '@types';

const defaultCardBody: UpdateCardInfoReq = {
  name: '',
  position: '',
  profileImage: '',
  reasonTexts: [],
  companyName: '',
  designTemplate: '',
  styleTemplate: '',
  email: '',
  introduction: '',
};

const defaultLinksBody: UpdateCardLinkReq[] = [];

export const cardBodyAtom = atom<UpdateCardInfoReq>({
  key: KEY.CARD_BODY,
  default: defaultCardBody,
});

export const linkBodyAtom = atom<UpdateCardLinkReq[]>({
  key: KEY.LINK_BODY,
  default: defaultLinksBody,
});
