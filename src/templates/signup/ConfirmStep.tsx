import { postSignup } from '@api';
import { Button, NavBar, Typography } from '@components';
import { userAtom } from '@stores';
import { useMutation } from '@tanstack/react-query';
import { User } from '@types';
import { checkAgreements } from '@utils';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { PostSignupRequest } from 'src/api/types';

interface ConfirmStepProps {
  agreements: boolean[];
}

const ConfirmStep = ({ agreements }: ConfirmStepProps) => {
  const router = useRouter();
  const [userState, setUserState] = useRecoilState(userAtom);
  const { mutate } = useMutation<User, AxiosError, PostSignupRequest>({
    mutationFn: postSignup,
  });
  const handleSignup = (isCardGenarate: boolean) => {
    const { allChecked, requiredChecked } = checkAgreements(agreements);
    mutate(
      {
        agreementAlarm: allChecked,
        agreementRequired: requiredChecked,
        email: userState.email,
        name: userState.name,
        oauthServerType: userState.oauthServerType,
      },
      {
        onSuccess: () => {
          if (isCardGenarate) router.push('/generation');
          else router.push('/');
        },
      },
    );
  };
  return (
    <>
      <NavBar onClickLeft={() => router.back()} />
      <Typography grayColor="white" type="title2">
        가입을 진행하고
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
      <Button color="primary" size="large" onClick={() => handleSignup(true)}>
        네, 명함도 만들래요
      </Button>
      <Button color="secondary" size="large" onClick={() => handleSignup(false)}>
        아니요, 가입만 할게요
      </Button>
    </>
  );
};
export default ConfirmStep;
