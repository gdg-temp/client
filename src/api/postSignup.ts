import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { User } from '@types';
import { PostSignupRequest, ResponseData } from './types';

const postSignup = async <T = ResponseData<User>>(
  signupParams: PostSignupRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await axiosInstance.post<T>(`/signup`, signupParams, config);
  return data;
};

export default postSignup;
