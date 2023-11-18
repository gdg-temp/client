import { CardLink, DefaultCardInfo, ReasonTexts, User } from '@types';

export type PostSignupRequest = User & {
  agreementRequired: boolean;
  agreementAlarm: boolean;
};

export type PostGenerationRequest = DefaultCardInfo & {
  reasonTexts: ReasonTexts;
};

export type PostLinkRequest = Omit<CardLink, 'id'> & { cardId: number };

export type UpdateLinkRequest = Partial<Omit<CardLink, 'id'>> & { linkId: number };

export type PostImageRequest = {
  file: FormData;
};
