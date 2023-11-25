import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { CardLink } from '@types';
import { UpdateLinkRequest } from './types';

const updateLink = async <T = CardLink>(
  linkParams: UpdateLinkRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { linkId, ...params } = linkParams;
  const { data } = await axiosInstance.patch<T>(`/link/${linkId}`, params, config);
  return data;
};

export default updateLink;
