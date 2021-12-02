import {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  CancelToken,
  Method,
} from "axios";
import {
  getUrlHost,
  getUrlProtocolHostPath,
  getUrlParams,
  getUrlProtocolHost,
} from "../url";
import request from "./_axios";
import axios from "axios";

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

  static setParams(params: Record<string, string>) {
    this.params = params;
    return this;
  }

  static async execute(cancelFn?: (c) => void) {
    const { method, url, data, headers, params } = this;
    const axiosConfig: AxiosRequestConfig = {};

    const targetHost = getUrlHost(url);

    const CancelToken = axios.CancelToken;
    axiosConfig.cancelToken = new CancelToken(cancelFn);

    // 如果当前环境是 GitHub Page 走我自己的服务器
    if (process.env.nodeEnv == "github") {
      return this.proxy(
        `https://www.manito.fun/middleware/proxy`,
        axiosConfig,
        method,
        url,
        data,
        headers,
        params
      );
    }

    if (targetHost != location.host) {
      // 走代理
      return this.proxy(
        `${getUrlProtocolHost(location.href)}/middleware/proxy`,
        axiosConfig,
        method,
        url,
        data,
        headers,
        params
      );
    } else {
      // 不走代理
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
      const response: AxiosResponse = await request(axiosConfig);
      return response;
    }
  }

  /**
   * 代理
   * @param serverUrl
   * @param method
   * @param url
   * @param data
   * @param headers
   * @param params
   * @returns
   */
  static async proxy(
    serverUrl,
    axiosConfig,
    method,
    url,
    data,
    headers,
    params
  ) {
    axiosConfig.method = "POST";
    axiosConfig.data = {
      method,
      url: getUrlProtocolHostPath(url),
      data,
      headers,
      params: { ...getUrlParams(url), ...params },
    };
    axiosConfig.url = serverUrl;

    axiosConfig.headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };
    const response: AxiosResponse = await request(axiosConfig);
    return response;
  }
}
