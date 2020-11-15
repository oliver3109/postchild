import axios from 'axios'

import buildHeader from './buildHeader'
import buildParameter from './buildParameter'

axios.interceptors.response.use(
  (response: any) => {
    return response
  },
  function (error) {
    if (error && error.response) {
      return Promise.resolve(error.response)
    }
    return Promise.reject(error)
  }
)

/**
 * main entry request
 * @param {*} method
 * @param {*} url
 * @param {*} params
 * @param {*} headers
 * @param {*} contentType
 * @param {*} rawRequestBody
 */
export const httpRequest = async (
  method: string,
  url: string,
  params: Array<any>,
  headers: Array<any>,
  contentType: string,
  rawRequestBody: any
) => {
  const _method = method.toLocaleLowerCase()
  const { path } = buildParameter(params)

  if (['get', 'head', 'options'].includes(_method)) {
    return await (axios as any)[_method](url + path, {
      // params: param,
      headers: buildHeader(headers),
    })
  }

  if (['put', 'post', 'patch'].includes(_method)) {
    const _headers = buildHeader(headers)
    _headers['content-type'] = contentType
    return await (axios as any)[_method](url + path, rawRequestBody, {
      // params: param,
      headers: _headers,
    })
  }

  if (_method === 'delete') {
    const _headers = buildHeader(headers)
    _headers['content-type'] = contentType
    return await axios.delete(url + path, {
      // params: param,
      headers: _headers,
    })
  }
}
