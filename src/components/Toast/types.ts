export interface ToastProps {
  /**
   * 토스트 메세지에 입력할 문자열입니다.
   */
  message?: string;
  /**
   * 토스트 메세지 표시유무입니다.
   */
  show?: boolean;
  /**
   * 토스트 메세지를 띄울 시간(ms)입니다.
   */
  duration?: number;
}
