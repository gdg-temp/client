import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';
import { ResponseData, UpdateCardRequest } from './types';

const updateCard = async <T = ResponseData<Card>>(
  updateParams: UpdateCardRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { encodeId, ...params } = updateParams;
  const { data } = await axiosInstance.put<T>(`cards/${encodeId}`, params, config);
  return data;
};

export default updateCard;
