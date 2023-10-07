import Cookies from 'js-cookie';
import { useModal, useToast } from '@hooks';
import { Button } from '@components';

const TempPAge = () => {
  const { open, close } = useModal();
  const { showToast } = useToast();
  const setTempCookie = () => {
    if (Cookies.get('LYL_TOKEN')) {
      Cookies.remove('LYL_TOKEN');
    } else {
      Cookies.set('LYL_TOKEN', 'TEST');
    }
    showToast('쿠키 작업 완료.');
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
      <Button color={'primary'} size="medium" onClick={handleButton}>
        임시 토큰 설정
      </Button>
    </div>
  );
};

export default TempPAge;
