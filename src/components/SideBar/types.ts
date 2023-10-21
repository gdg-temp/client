export interface SideBarProps {
  /**
   * 사이드바에 들어가는 컨텐츠입니다.
   */
  name?: string;
  /**
   * 컨텐츠를 나타내는 아이콘을 선택합니다.
   */
  contentIcon?: 'alarm' | 'setting';
  /**
   * 로그인 아이콘을 나타냅니다.
   */
  loginIcon?: 'kakao' | 'naver' | 'google';
  /**
   *  로그인 여부를 결정합니다.
   */
  isLogined: boolean;
  /**
   *
   * @returns 사이드바를 닫을 수 있는 함수를 넣습니다.
   */
  onClose: () => void;
}
