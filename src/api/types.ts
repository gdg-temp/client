import { User } from '@types';

export type PostSignupRequest = User & {
  agreementRequired: boolean;
  agreementAlarm: boolean;
};
