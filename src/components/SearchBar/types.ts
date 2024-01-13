import type { InputHTMLAttributes } from 'react';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 검색바에 전달할 검색어입니다.
   */
  searchText: string;
  /**
   * 검색어 입력 시 검색 결과 상태를 업데이트합니다.
   */
  onSearchTextChange: React.Dispatch<React.SetStateAction<string>>;
  /**
   * 검색 아이콘 클릭 시 검색 결과의 개수 상태를 업데이트합니다.
   */
  onShowTextChange: React.Dispatch<React.SetStateAction<boolean>>;
}
