import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';
import { UpdateCardRequest } from './types';

const updateCard = async <T = Card>(
  updateParams: UpdateCardRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { encodedId, ...params } = updateParams;
  const { data } = await axiosInstance.put<T>(`cards/${encodedId}`, params, config);
  return data;
};

export default updateCard;
