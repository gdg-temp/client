import { NavBar } from '@components';

import type { ReactElement } from 'react';

const NavLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default NavLayout;
