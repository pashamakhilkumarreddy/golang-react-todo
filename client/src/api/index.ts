import axios from 'axios';
import { API_BASE_URL } from 'config/constants';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = "";
    config.headers.Authorization = `Authorization ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (
      error?.response &&
      error.response.status === 401 &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;

      const newToken = '';
      originalConfig.headers.Authorization = `Bearer ${newToken}`;

      return axiosClient(originalConfig);
    }
    return Promise.reject(error.response ? error.response.data : error);
  }
);

const makeRequest = {
  get: (url: string, config = {}) => axiosClient.get(url, config),
  post: (url: string, data: any, config = {}) =>
    axiosClient.post(url, data, config),
  put: (url: string, data: any, config = {}) =>
    axiosClient.put(url, data, config),
  delete: (url: string, config = {}) => axiosClient.delete(url, config),
  patch: (url: string, data: any, config = {}) =>
    axiosClient.patch(url, data, config),
};

export default makeRequest;
