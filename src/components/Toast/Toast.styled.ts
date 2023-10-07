import styled, { keyframes, css } from 'styled-components';

const fadeInOut = keyframes`
  0% { opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { opacity: 0; }
`;

const ToastWrapper = styled.div<{ duration: number }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 209px;
  height: 44px;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  z-index: 1000;
  animation: ${({ duration }) => css`
    ${fadeInOut} ${duration}ms forwards
  `};
`;

export default { ToastWrapper };
