import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import { DeleteLinkRequest } from './types';

const deleteLink = async <T = null>(
  linkParams: DeleteLinkRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { linkId } = linkParams;
  const { data } = await axiosInstance.delete<T>(`/link/${linkId}`, config);
  return data;
};

export default deleteLink;
