import axios from "axios";
import { message } from "ant-design-vue";

const service = axios.create({
  withCredentials: false,
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
    const data = response.data;
    // 请求成功
    if (data.code === 0) {
      const requestTime = response.config.headers["x-postchild-request-start"];
      data.time = +new Date() - +requestTime;
      return data;
    }
    // 请求失败
    if (data.code === -1) {
      message.error(data.message);
      return data;
    }
  },
  (error) => {
    message.error(error);
    return Promise.reject(error);
  }
);

export default service;
