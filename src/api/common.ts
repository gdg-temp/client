import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `/v1/api`,
  timeout: 10000,
});
