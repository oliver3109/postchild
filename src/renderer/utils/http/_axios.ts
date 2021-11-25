import axios from "axios";

const service = axios.create({
  withCredentials: false,
  timeout: 10000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default service;
