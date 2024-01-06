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
   * 왼쪽 아이콘 클릭 시 실행될 함수입니다
   */
  onClickLeft?: () => void;
  /**
   * 오른쪽 아이콘 클릭 시 실행될 함수입니다
   */
  onClickRight?: () => void;
  /**
   * 검색바를 표시할지의 여부를 결정합니다.
   */
  showSearchBar?: boolean;
  /**
   * 검색바에 전달할 검색어입니다.
   */
  searchText?: string;
  /**
   * 검색어 입력 시 검색 결과 상태를 업데이트합니다.
   */
  onSearchTextChange?: React.Dispatch<React.SetStateAction<string>>;
  /**
   * 검색어 입력 시 검색 결과의 개수 상태를 업데이트합니다.
   */
  onShowTextChange?: React.Dispatch<React.SetStateAction<boolean>>;
}
