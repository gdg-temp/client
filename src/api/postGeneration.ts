import { axiosInstance } from './common';

import type { AxiosRequestConfig } from 'axios';
import type { Card } from '@types';
import { PostGenerationRequest } from './types';

const postGeneration = async <T = Card>(
  generationParams: PostGenerationRequest,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await axiosInstance.post<T>(`/generation`, generationParams, config);
  return data;
};

export default postGeneration;
