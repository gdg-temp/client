import { NavBar, SideBar } from '@components';
import { userAtom } from '@stores';

import { ReactElement, useState } from 'react';
import { useRecoilState } from 'recoil';

const NavLayout = ({ children }: { children: ReactElement }) => {
  const [userState, setUserState] = useRecoilState(userAtom);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NavBar leadingButton="menu" trailingButton="add" onClickLeftBtn={toggleSidebar} />
      {isSidebarOpen &&
        (userState.name ? (
          <SideBar isLogined={true} name="이름" loginIcon="kakao" onClose={toggleSidebar} />
        ) : (
          <SideBar isLogined={false} onClose={toggleSidebar} />
        ))}
      {children}
    </>
  );
};

export default NavLayout;
