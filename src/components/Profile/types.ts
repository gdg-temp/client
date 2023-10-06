export interface ProfileProps {
  /**
   * 프로필 컴포넌트의 크기를 결정합니다.
   */
  size?: 'large' | 'small';
  /**
   * 카메라 버튼의 유무를 결정합니다.
   */
  cameraBtn?: boolean;
  /**
   * 프로필 이미지 경로를 작성합니다.
   */
  src?: string;
  /**
   * 카메라 버튼 클릭시 동작을 작성합니다.
   */
  onClick?: () => void;
}
