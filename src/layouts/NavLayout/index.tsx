import { NavBar } from '@components';
import { userAtom } from '@stores';

import { ReactElement } from 'react';
import { useRecoilState } from 'recoil';

const NavLayout = ({ children }: { children: ReactElement }) => {
  const [userState, setUserState] = useRecoilState(userAtom);

  return (
    <div>
      {userState.name ? <NavBar /> : <div>로그인안됨</div>}
      {children}
    </div>
  );
};

export default NavLayout;
