import { Button, NavBar, Typography } from '@components';
import { userAtom } from '@stores';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

const ConfirmStep = () => {
  const router = useRouter();
  const [userState, setUserState] = useRecoilState(userAtom);
  return (
    <>
      <NavBar onClickLeft={() => router.back()} />
      <Typography grayColor="white" type="title2">
        가입하신 정보로
        <br />
        명함 만들기를 이어갈까요?
      </Typography>
      <Typography grayColor="blueGray300" type="body7">
        기타 정보는 추가할 수 있어요.
      </Typography>
      <div>
        <div>
          <Typography grayColor="blueGray300" type="body4">
            이름
          </Typography>
          <Typography grayColor="white" type="body5">
            {userState.name}
          </Typography>
        </div>
        <div>
          <Typography grayColor="blueGray300" type="body4">
            이메일
          </Typography>
          <Typography grayColor="white" type="body5">
            {userState.email}
          </Typography>
        </div>
      </div>
      <Button color="primary" size="large" onClick={() => router.push('/generation')}>
        네! 이어서 만들래요
      </Button>
      <Button color="secondary" size="large" onClick={() => router.push('/')}>
        새로 만들래요
      </Button>
    </>
  );
};
export default ConfirmStep;
