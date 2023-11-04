import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { User } from '@types';
import { PostSignupRequest } from './types';

const postSignup = async <T = User>(
  signupParams: PostSignupRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await axiosInstance.post<T>(`/signup`, signupParams, config);
  return data;
};

export default postSignup;
