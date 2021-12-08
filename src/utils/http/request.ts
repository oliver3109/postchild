import {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
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

  static async execute(env: string, cancelFn?: (c) => void) {
    console.log("当前环境: " + env);
    const { method, url, data, headers, params } = this;
    const axiosConfig: AxiosRequestConfig = {};

    const CancelToken = axios.CancelToken;
    axiosConfig.cancelToken = new CancelToken(cancelFn);

    // 如果当前环境是 GitHub Page 走我自己的服务器
    if (env === "github") {
      return this.proxy(
        `https://proxy.manito.fun/middleware/proxy`,
        axiosConfig,
        method,
        url,
        data,
        headers,
        params
      );
    }

    // 如果当前环境是 Electron
    if (env === "electron") {
      // TODO
    }

    // 如果当前环境是 纯浏览器
    if (env === "web") {
      return this.proxy(
        `${getUrlProtocolHost(location.href)}/middleware/proxy`,
        axiosConfig,
        method,
        url,
        data,
        headers,
        params
      );
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
