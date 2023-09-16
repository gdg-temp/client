import styled from 'styled-components';

import type { ModalStyleProps, SizeStyleOption } from './types';

const MODAL_WIDTH: Record<SizeStyleOption, string> = {
  large: '585px',
  small: '280px',
};

const MODAL_HEIGHT: Record<SizeStyleOption, string> = {
  large: '100%',
  small: '172px',
};

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalWrapper = styled.div<{ size: SizeStyleOption }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 40px;
  width: ${({ size }) => MODAL_WIDTH[size]};
  height: ${({ size }) => MODAL_HEIGHT[size]};
  background-color: white;
`;

const ContentWrapper = styled.div<ModalStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonWrapper = styled.div<ModalStyleProps>`
  display: flex;
  justify-content: space-between;
`;

export default { ModalBackground, ModalWrapper, ContentWrapper, ButtonWrapper };
