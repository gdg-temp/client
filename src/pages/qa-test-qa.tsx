import Cookies from 'js-cookie';
import { useModal, useToast } from '@hooks';
import { Button } from '@components';

const QATestPage = () => {
  const { open, close } = useModal();
  const { showToast } = useToast();
  const setTempCookie = () => {
    if (Cookies.get('QA_TEST_TOKEN')) {
      Cookies.remove('QA_TEST_TOKEN');
    } else {
      Cookies.set('QA_TEST_TOKEN', 'TEST');
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
        QA용 토큰 설정
      </Button>
    </div>
  );
};

export default QATestPage;
