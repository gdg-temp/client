import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Collection } from '@types';

const getCollection = async <T = Collection[]>(config?: AxiosRequestConfig): Promise<T> => {
  const { data } = await axiosInstance.get<T>('/collections', config);
  return data;
};

export default getCollection;
