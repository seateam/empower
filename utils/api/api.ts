import Axios, { type AxiosInstance, type AxiosResponse } from 'axios'

declare module 'axios' {
  interface AxiosResponse {
    ok: boolean
  }
}

export const apiErrorCode: { [key: string]: string } = {
  404: 'Request failed.',
}

const showError = (status: number, message?: string) => {
  const code = String(status)
  if (apiErrorCode[code]) {
    // mp.error(apiErrorCode[code])
  } else {
    // mp.error(message || `Unknown error: ${code}`)
  }
}

const initResponse = (response: AxiosResponse) => {
  // const status = response?.data?.errorCode || response?.status || 404
  const status = response?.data?.code || 404
  response.ok = status >= 200 && status < 300
  if (!response.ok) {
    showError(status, response?.data?.message)
  }
  return response
}

const setInterceptors = (api: AxiosInstance) => {
  // interceptors https://axios-http.com/zh/docs/interceptors
  api.interceptors.request.use(
    function (config) {
      config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token') || ''
      return config
    },
    function (error) {
      return Promise.reject(error)
    },
  )
  api.interceptors.response.use(
    function (response) {
      return initResponse(response)
    },
    function (error) {
      if (error.response) {
        return initResponse(error.response)
      } else {
        showError(404)
        return Promise.reject(error)
      }
    },
  )
}

const api = Axios.create({
  baseURL: 'https://test2.majyo.vip',
})
setInterceptors(api)

export default api
