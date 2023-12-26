import { axiosInstance } from './common';
import { ResponseData } from './types';

const postLogout = async <T = ResponseData<void>>(): Promise<T> => {
  const { data } = await axiosInstance.post<T>(`/logout`);
  return data;
};

export default postLogout;
