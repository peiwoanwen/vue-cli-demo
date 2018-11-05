import axios from 'axios'
import { BASE_URL } from './contant'
axios.defaults.withCredentials = true
const BASE_DEVICE_URL = `/apis/${BASE_URL}/device`
const BASE_DU_URL = `/apis/${BASE_URL}/user/login/service`
const done = response => response

export const templateDevicePost = (action) => (data) => {
  const url = `${BASE_DEVICE_URL}/${action}`
  return axios.post(url, data).then(done)
}

export const templateDoPost = (action) => (data) => {
  const url = `${BASE_DU_URL}/${action}`
  return axios.post(url, data).then(done)
}
