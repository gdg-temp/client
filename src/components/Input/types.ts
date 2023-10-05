import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * '사용 목적을 결정합니다.
   */
  id: string;
  /**
   * 타입을 결정합니다.
   */
  type: string;
  /**
   * placeholder를 작성합니다.
   */
  placeholder: string;
  /**
   * 라벨을 작성합니다.
   */
  label?: string;
  /**
   * 가이드를 제공합니다.
   */
  guide?: string;
  /**
   * 에러/성공 여부 색상을 결정합니다.
   */
  colorType?: 'error' | 'success';
}
