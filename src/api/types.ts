import { CardLink, DefaultCardInfo, ReasonTexts, User } from '@types';

export type PostSignupRequest = User & {
  agreementRequired: boolean;
  agreementAlarm: boolean;
};

export type PostGenerationRequest = DefaultCardInfo & {
  reasonTexts: ReasonTexts;
};

export type PostLinkRequest = Omit<CardLink, 'id'> & { encodedId: string };

export type UpdateLinkRequest = Partial<Omit<CardLink, 'id'>> & { linkId: number };

export type DeleteLinkRequest = { linkId: number };

export type PostImageRequest = FormData;

export type DeleteCardRequest = { encodedId: string };

export type UpdateCardRequest = DefaultCardInfo & {
  encodedId: string;
};

export type ResponseData<data> = {
  data: data;
  status: number;
  success: boolean;
};
