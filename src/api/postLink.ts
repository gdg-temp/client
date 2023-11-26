import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';
import { PostLinkRequest, ResponseData } from './types';

const postLink = async <T = ResponseData<Card>>(
  linkParams: PostLinkRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { encodedId, linkText, linkType, linkUrl } = linkParams;
  const { data } = await axiosInstance.post<T>(
    `/link/${encodedId}`,
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
