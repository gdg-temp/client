import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { PostImageRequest } from './types';

const postImage = async <T = { imageUrl: string }>(
  imageParams: PostImageRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await axiosInstance.post<T>(`/images`, imageParams, {
    ...config,
    headers: {
      ...config?.headers,
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export default postImage;
