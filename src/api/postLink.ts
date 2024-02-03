import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';
import { PostLinkRequest, ResponseData } from './types';

const postLink = async <T = ResponseData<Card>>(
  linkParams: PostLinkRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { encodeId, linkText, linkType, linkUrl } = linkParams;
  const { data } = await axiosInstance.post<T>(
    `/link/${encodeId}`,
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
