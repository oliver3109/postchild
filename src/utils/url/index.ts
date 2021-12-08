/**
 * 返回链接的 query params
 * @param url
 * @returns
 */
export const getUrlParams = (url: string) => {
  const u = new URL(url);
  const s = new URLSearchParams(u.search);
  const obj = {};
  s.forEach((v, k) => (obj[k] = v));
  return obj;
};

/**
 * 获取链接的 protocol + host
 * @param url
 */
export const getUrlProtocolHost = (url: string) => {
  const urlObj = new URL(url);
  return `${urlObj.protocol}//${urlObj.host}`;
};

/**
 * 获取链接的 host
 * @param url
 */
export const getUrlHost = (url: string) => {
  const urlObj = new URL(url);
  return urlObj.host;
};

/**
 * 获取链接的 path
 * @param url
 */
export const getUrlPath = (url: string) => {
  const urlObj = new URL(url);
  return urlObj.pathname;
};

/**
 * 获取链接的 protocol + host + path
 * @param url
 */
export const getUrlProtocolHostPath = (url: string) => {
  return getUrlProtocolHost(url) + getUrlPath(url);
};
