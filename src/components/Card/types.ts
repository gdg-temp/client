import { ReactNode } from 'react';

export interface CardProps {
  /**
   * 명함 속 이름 입니다.
   */
  name: string;
  /**
   * 명함 속 회사 입니다.
   */
  company: string;
  /**
   * 명함 속 직책 입니다.
   */
  position: string;
  /**
   * 명함 속 이메일 입니다.
   */
  email: string;
  /**
   * 명함 속 프로필컴포넌트 입니다.
   */
  profile?: ReactNode;
  /**
   * 명함 속 링크들의 정보 입니다.
   */
  linkInfo?: ReactNode;
  /**
   * 명함 속 명함생성이유 입니다.
   */
  reasons?: ReactNode;
  /**
   * 명함의 앞면과 뒷면의 상태를 정합니다.
   */
  isFront?: boolean;
  /**
   * 명함의 사이즈를 정합니다.
   */
  size?: 'default' | 'full';
  /**
   * 명함의 디자인를 정합니다.
   */
  designTemplate: string;
  /**
   * 명함의 스타일를 정합니다.
   */
  styleTemplate: string;
}
