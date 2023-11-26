import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { User } from '@types';
import { ResponseData } from './types';

const getUser = async <T = ResponseData<User>>(config?: AxiosRequestConfig): Promise<T> => {
  const { data } = await axiosInstance.get<T>('/user', config);
  return data;
};

export default getUser;
