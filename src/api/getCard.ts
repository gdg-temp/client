import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';

const getCard = async <T = Card>(id: string, config?: AxiosRequestConfig): Promise<T> => {
  const { data } = await axiosInstance.get<T>(`/cards/${id}`, config);
  return data;
};

export default getCard;
