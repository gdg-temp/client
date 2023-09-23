import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';

const getCards = async <T = Card[]>(config?: AxiosRequestConfig): Promise<T> => {
  const { data } = await axiosInstance.get<T>('/cards', config);
  return data;
};

export default getCards;
