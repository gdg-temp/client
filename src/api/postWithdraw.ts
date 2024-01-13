import { axiosInstance } from './common';
import { ResponseData } from './types';

const postWithdraw = async <T = ResponseData<void>>(): Promise<T> => {
  const { data } = await axiosInstance.delete<T>(`/withdraw`);
  return data;
};

export default postWithdraw;
