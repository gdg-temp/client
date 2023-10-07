import Button from '../Button';
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
  const preventPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <>
      {!isOpened ? (
        <></>
      ) : isLoading ? (
        <S.ModalBackground onClick={handleBackgroundClick}>
          <div onClick={preventPropagation}>...Loading</div>
        </S.ModalBackground>
      ) : (
        <S.ModalBackground onClick={handleBackgroundClick}>
          <S.ModalWrapper size={size} onClick={preventPropagation}>
            <S.ContentWrapper type={'body6'} grayColor={'white'}>
              {content}
            </S.ContentWrapper>
            <S.ButtonWrapper>
              {buttonType === 'noneButton' ? (
                <></>
              ) : buttonType === 'oneButton' ? (
                <Button size="medium" color="primary" onClick={onClick}>
                  {buttonTitle}
                </Button>
              ) : (
                <>
                  <Button size="medium" color="secondary" onClick={onClose}>
                    취소
                  </Button>
                  <Button size="medium" color="primary" onClick={onClick}>
                    {buttonTitle}
                  </Button>
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
