import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { User } from '@types';
import { ResponseData } from './types';

interface LoginParams {
  oauthServerType: 'KAKAO' | 'GOOGLE' | 'NAVER';
  code: string;
}
const loginUser = async <T = ResponseData<User>>(
  loginParams: LoginParams,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { oauthServerType, code } = loginParams;
  const { data } = await axiosInstance.get<T>(
    `/login/${oauthServerType.toLowerCase()}?code=${code}`,
    config,
  );
  return data;
};

export default loginUser;
