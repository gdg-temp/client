import S from './Modal.styled';

import type { ModalProps } from '@types';

const Modal = ({
  buttonType,
  buttonTitle,
  content,
  isLoading,
  isOpened,
  size = 'small',
  onClick,
  onClose,
}: ModalProps) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <>
      {!isOpened ? (
        <></>
      ) : isLoading ? (
        <S.ModalBackground onClick={handleBackgroundClick}>
          <div>...Loading</div>
        </S.ModalBackground>
      ) : (
        <S.ModalBackground onClick={handleBackgroundClick}>
          <S.ModalWrapper size={size}>
            <S.ContentWrapper>{content}</S.ContentWrapper>
            <S.ButtonWrapper>
              {buttonType === 'noneButton' ? (
                <></>
              ) : buttonType === 'oneButton' ? (
                <button onClick={onClick}>{buttonTitle}</button>
              ) : (
                <>
                  <button onClick={onClose}>취소</button>
                  <button onClick={onClick}>{buttonTitle}</button>
                </>
              )}
            </S.ButtonWrapper>
          </S.ModalWrapper>
        </S.ModalBackground>
      )}
    </>
  );
};

export default Modal;