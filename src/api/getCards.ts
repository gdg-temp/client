import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';
import { ResponseData } from './types';

const getCards = async <T = ResponseData<Card[]>>(config?: AxiosRequestConfig): Promise<T> => {
  const { data } = await axiosInstance.get<T>('/cards', config);
  return data;
};

export default getCards;
