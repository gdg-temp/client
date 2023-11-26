import type { InputHTMLAttributes } from 'react';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  /**
   * 삭제 아이콘을 클릭했을 때 실행될 함수입니다.
   */
  onClickDelete: () => void;
  /**
   * 검색 아이콘을 클릭했을 때 실행될 함수입니다.
   */
  onClickSearch?: () => void;
  /**
   * 검색바에 내용 입력시 나타나는 Delete 버튼입니다.
   */
  isWrite: boolean;
}
