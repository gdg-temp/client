import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import { DeleteCardRequest } from './types';

const deleteCard = async <T = null>(
  idParams: DeleteCardRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { encodedId } = idParams;
  const { data } = await axiosInstance.delete<T>(`/cards/${encodedId}`, config);
  return data;
};

export default deleteCard;
