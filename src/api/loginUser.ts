import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { User } from '@types';

interface LoginParams {
  oauthServerType: 'KAKAO' | 'GOOGLE' | 'NAVER';
  code: string;
}
const loginUser = async <T = User>(
  loginParams: LoginParams,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { oauthServerType, code } = loginParams;
  const { data } = await axiosInstance.get<T>(`/login/${oauthServerType}?code=${code}`, config);
  return data;
};

export default loginUser;
