import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import { DeleteCardRequest } from './types';

const deleteCard = async <T = null>(
  idParams: DeleteCardRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { encodeId } = idParams;
  const { data } = await axiosInstance.delete<T>(`/cards/${encodeId}`, config);
  return data;
};

export default deleteCard;
