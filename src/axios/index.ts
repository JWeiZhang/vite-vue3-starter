import axios from 'axios';

const instance = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_HOST as string) || '', // default baseUrl
  timeout: 100000,
});

// request interceptor
instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
