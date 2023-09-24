import { useContext } from 'react';
import { ModalContext } from '@stores';

/**
 * @description
 * 모달을 띄울 수 있는 함수를 제공합니다.
 *
 * open의 파라미터로 props객체를 전달합니다.
 *
 * props객체는 모달에 전달할 props입니다.
 * isOpened와 isLoading은 전달하지 않습니다.
 * @returns 모달 함수 { open, close, setLoading }
 * @example
 * const { open, close } = useModal();
 * return (
 *   <Button
 *      onClick={() => {
 *        open({
 *          content: "정말 삭제하시겠습니까?",
 *          buttonType: "twoButton",
 *          buttonTitle: "삭제",
 *          onClick: handleModalComplete,
 *         })
 *       }}>
 *    Open
 *  </Button>
 * )
 */
const useModal = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};

export default useModal;
