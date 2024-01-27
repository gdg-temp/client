import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import { SaveCardRequest } from './types';

const saveCard = async <T = null>(
  idParams: SaveCardRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { encodedId } = idParams;
  const { data } = await axiosInstance.post<T>(`/collections/${encodedId}`, config);
  return data;
};

export default saveCard;
