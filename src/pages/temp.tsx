import Cookies from 'js-cookie';
import { useModal } from '@hooks';

const TempPAge = () => {
  const { open, close } = useModal();
  const setTempCookie = () => {
    Cookies.set('LYL_TOKEN', 'TEST');
    close();
  };
  const handleButton = () => {
    open({
      content: '정말 삭제하시겠습니까?',
      buttonType: 'twoButton',
      buttonTitle: '삭제',
      onClick: setTempCookie,
      onClose: close,
    });
  };

  return (
    <div>
      <button onClick={handleButton}>임시 토큰 발급</button>
    </div>
  );
};

export default TempPAge;
