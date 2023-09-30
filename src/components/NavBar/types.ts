export interface NavbarProps {
  /**
   * 네비게이션바에 들어갈 페이지 이름입니다.
   */
  title?: string;
  /**
   * 네비게이션바 왼쪽에 들어갈 아이콘입니다.
   */
  leadingButton?: 'back' | 'menu';
  /**
   * 네비게이션바 오른쪽에 들어갈 아이콘입니다.
   */
  trailingButton?: 'add' | 'flip';
  /**
   *
   * @returns 아이콘 클릭 시 실행될 함수입니다
   */
  onClick?: () => void;
}
