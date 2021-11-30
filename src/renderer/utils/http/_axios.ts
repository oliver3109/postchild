import axios from "axios";

const service = axios.create({
  withCredentials: false,
  timeout: 10000,
});

service.interceptors.request.use(
  (config) => {
    config.headers["x-postchild-request-start"] = new Date()
      .getTime()
      .toString();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    const requestTime = response.config.headers["x-postchild-request-start"];
    res.time = +new Date() - +requestTime;
    return res;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default service;
