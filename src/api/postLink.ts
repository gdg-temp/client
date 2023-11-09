import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';
import { PostLinkRequest } from './types';

const postLink = async <T = Card>(
  linkParams: PostLinkRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { cardId, linkText, linkType, linkUrl } = linkParams;
  const { data } = await axiosInstance.post<T>(
    `/link/${cardId}`,
    {
      linkText,
      linkType,
      linkUrl,
    },
    config,
  );
  return data;
};

export default postLink;