import Cookies from 'js-cookie';
import { useModal } from '@hooks';

const TempPAge = () => {
  const { open, close } = useModal();
  const setTempCookie = () => {
    if (Cookies.get('LYL_TOKEN')) {
      Cookies.remove('LYL_TOKEN');
    } else {
      Cookies.set('LYL_TOKEN', 'TEST');
    }
    close();
  };
  const handleButton = () => {
    open({
      content: '쿠키를 생성 또는 삭제하시겠습니다.',
      buttonType: 'twoButton',
      buttonTitle: '네',
      onClick: setTempCookie,
      onClose: close,
    });
  };

  return (
    <div>
      <button onClick={handleButton}>임시 토큰 설정</button>
    </div>
  );
};

export default TempPAge;
