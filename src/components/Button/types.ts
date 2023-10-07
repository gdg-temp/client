import type { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼에 들어가는 컨텐츠이며 ReactNode입니다.
   */
  children: ReactNode;
  /**
   * 색상을 결정합니다.
   */
  color: 'primary' | 'secondary' | 'addLink' | 'addLinkItem';
  /**
   * 비활성화 여부를 결정합니다.
   */
  disabled?: boolean;
  /**
   * 버튼의 크기를 결정합니다.
   */
  size: 'large' | 'medium' | 'small' | 'addLink' | 'addLinkItem';
}
