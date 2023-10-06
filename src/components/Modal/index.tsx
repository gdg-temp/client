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
      ) : size === 'addLink' ? (
        <S.ModalBackground onClick={handleBackgroundClick}>
          <S.ModalWrapper size={size}>
            <S.AddLinkItemWrapper>{content}</S.AddLinkItemWrapper>
          </S.ModalWrapper>
        </S.ModalBackground>
      ) : (
        <S.ModalBackground onClick={handleBackgroundClick}>
          <S.ModalWrapper size={size}>
            <S.ContentWrapper type={'body6'} grayColor={'white'}>
              {content}
            </S.ContentWrapper>
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
