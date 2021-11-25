import { AxiosRequestHeaders, AxiosResponse, Method } from "axios";
import {
  getUrlHost,
  getUrlProtocolHostPath,
  getUrlParams,
  getUrlProtocolHost,
} from "../url";
import axios from "./_axios";

export class HttpRequest {
  static url?: string;

  static method?: Method;

  static data?: Record<string, any>;

  static headers?: AxiosRequestHeaders;

  static params?: any;

  static setUrl(url: string) {
    this.url = url;
    return this;
  }

  static setMethod(method: Method) {
    this.method = method;
    return this;
  }

  static setData(data: Record<string, any>) {
    this.data = data;
    return this;
  }

  static setHeaders(headers: AxiosRequestHeaders) {
    this.headers = headers;
    return this;
  }

  static setParams(params: any) {
    this.params = params;
    return this;
  }

  static async execute() {
    const { method, url, data, headers, params } = this;
    const axiosConfig: Record<string, any> = {};
    if (method) {
      axiosConfig["method"] = method;
    }
    if (url) {
      axiosConfig["url"] = url;
    }
    if (data) {
      axiosConfig["data"] = data;
    }
    if (headers) {
      axiosConfig["headers"] = headers;
    }
    if (params) {
      axiosConfig["params"] = params;
    }

    const targetHost = getUrlHost(url);

    if (targetHost != location.host) {
      // 走代理
      axiosConfig.method = "POST";
      axiosConfig.data = {
        method,
        url: getUrlProtocolHostPath(url),
        data,
        headers,
        params: getUrlParams(url),
      };
      axiosConfig.url = `${getUrlProtocolHost(
        location.href
      )}/postchild/middleware/proxy`;

      axiosConfig.headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      };

      const request: AxiosResponse = await axios(axiosConfig);
      return request;
    }

    const request: AxiosResponse = await axios(axiosConfig);
    return request;
  }
}
