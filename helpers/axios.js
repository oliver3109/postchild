import axios from 'axios'

import buildHeader from './buildHeader'
import buildParameter from './buildParameter'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    return Promise.resolve(error.response)
  }
)

// get request
export const httpGet = async (url, params, headers) => {
  return await axios.get(url, {
    params,
    headers,
  })
}

export const httpRequest = async (method, url, params, headers) => {
  if (method.toLocaleLowerCase() === 'get') {
    const result = await httpGet(
      url,
      buildParameter(params),
      buildHeader(headers)
    )
    return {
      status: result.status,
      data:
        result.status === 200
          ? JSON.stringify(result.data, null, 2)
          : result.data,
      headers: result.headers,
    }
  }
}
