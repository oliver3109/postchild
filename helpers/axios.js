import axios from 'axios'

import buildHeader from './buildHeader'
import buildParameter from './buildParameter'

axios.interceptors.response.use(
  (response) => {
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
  method,
  url,
  params,
  headers,
  contentType,
  rawRequestBody
) => {
  const _method = method.toLocaleLowerCase()
  if (['get', 'head', 'options'].includes(_method)) {
    return await axios[_method](url, {
      params: buildParameter(params),
      headers: buildHeader(headers),
    })
  }
  // if (['connect', 'trace'].includes(_method)) {
  //   return await axios[_method](url, {
  //     params: buildParameter(params),
  //     headers: buildHeader(headers),
  //   })
  // }
  if (['put', 'post', 'patch'].includes(_method)) {
    const _headers = buildHeader(headers)
    _headers['content-type'] = contentType
    return await axios[_method](url, rawRequestBody, {
      params: buildParameter(params),
      headers: _headers,
    })
  }
  if (_method === 'delete') {
    const _headers = buildHeader(headers)
    _headers['content-type'] = contentType
    return await axios.delete(url, {
      params: buildParameter(params),
      headers: _headers,
    })
  }
}
