/**
 * Created by ldm on 2017/11/1.
 */
/**
 * wrap fetch function
 */
import axios from 'axios'
import md5 from 'blueimp-md5'
import store from '../store'
import queryString2Object from '../utils/query-string-2-object'

// 公共参数
let authorization = window.sessionStorage.getItem('authorization')
if (!authorization) {
  let v = '1.0'
  let timestamp = +new Date()
  let queryObj = queryString2Object()
  let sign = md5(queryObj.store_id, queryObj.token, timestamp, v)

  authorization = {
    token: queryObj.token,
    timestamp: timestamp,
    sign,
    v
  }
  window.sessionStorage.setItem('authorization', JSON.stringify(authorization))
}

// 设置请求公共参数
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.data = {...JSON.parse(window.sessionStorage.getItem('authorization'))}

function parseResponse (response) {
  return Promise.all([response.status, response.statusText, response.data])
}

function checkStatus ([status, statusText, data]) {
  if (status >= 200 && status < 300) {
    return data
  } else {
    let error = new Error(statusText)
    error.status = status
    error.error_message = data
    return Promise.reject(error)
  }
}

function handleError (error) {
  console.log(error)
  store.dispatch('hideLoading')
  store.dispatch('toast', '网络正在开小差，请稍后再试')
}

export default {
  get (url, param = {}) {
    let query = []
    Object.keys(param).forEach(item => {
      query.push(`${item}=${encodeURIComponent(param[item])}`)
    })
    let params = query.length ? '?' + query.join('&') : ''
    return axios.get(url + params).then(parseResponse).then(checkStatus).catch(error => handleError(error))
  },
  post (url, params = {}) {
    return axios.post(url, params).then(parseResponse).then(checkStatus).catch(error => handleError(error))
  }
}
