import { atom } from 'recoil';
import { KEY } from '@static';

import type { User } from '@types';

const defaultUser: User = {
  id: 0,
  name: '',
  email: '',
  oauthServerType: 'KAKAO',
};

const userAtom = atom<User>({
  key: KEY.USER,
  default: defaultUser,
});

export default userAtom;
