import type { InputHTMLAttributes } from 'react';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  /**
   * 검색 또는 삭제 아이콘을 클릭했을 때 실행될 함수입니다.
   */
  onClick: () => void;
  /**
   * 검색바에 내용 입력시 나타나는 Delete 버튼입니다.
   */
  isWrite: boolean;
}
