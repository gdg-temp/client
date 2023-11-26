import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';
import { ResponseData } from './types';

const getCard = async <T = ResponseData<Card>>(
  id: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await axiosInstance.get<T>(`/cards/${id}`, config);

  return data;
};

export default getCard;
