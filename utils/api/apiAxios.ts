import axios from 'axios'
import { ElMessage } from 'element-plus'
// import { getToken, clearToken } from '@/share/utils/auth'
// Request timeout
axios.defaults.timeout = 15000

// Post request header
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

axios.interceptors.request.use(
  (config: any) => {
    // const token = getToken()
    // token && (config.headers.lobbyToken = token) // accessToken
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

const noMesgArr: Array<string | any> = [
  '/user/isJoinDc',
  'user/answer',
  'user/twBind',
  'user/dcBind',
  'user/refresh',
  'user/retweete',
  'user/like',
  'user/twFollow',
  'user/assist',
]
axios.interceptors.response.use()
/**
 * Get method, corresponding to get request
 * @param {String} url [The requested URL address]
 * @param {Object} params [Parameters carried during request]
 */
export function get(url: any, params?: any, headers?: any) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params, headers })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
/**
 * Post method, corresponding to post request
 * @param {String} url [The requested URL address]
 * @param {Object} params [Parameters carried during request]
 */
export function post(url: any, params?: any, timeout?: number, headers?: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        timeout: timeout === -1 ? 15000 : timeout,
        headers:
          headers == 'urlencoded'
            ? { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
            : headers,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
