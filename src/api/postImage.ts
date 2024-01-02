import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { PostImageRequest, ResponseData } from './types';

const postImage = async <T = ResponseData<{ imageUrl: string }>>(
  imageData: PostImageRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await axiosInstance.post<T>(`/images`, imageData, {
    ...config,
    headers: {
      ...config?.headers,
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export default postImage;
