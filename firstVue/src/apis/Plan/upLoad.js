import axios from 'axios'
import { BASE_URL } from '../constants'

const BASE_UPCONTROLLER_URL = `${BASE_URL}/upController`
const done = response => response.data.results

const template = (action) => (data) => {
  const url = `${BASE_UPCONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
/**
 * 上传日时方案
 */
export function uploadDayPlan (data) {
  return template('uploadDayPlan')(data)
}
/**
 * 假期方案上传
 * @param {*} holiDay
 */
export function uploadHolidayPlan(data) {
  return template('uploadHolidayPlan')(data)
}
/**
 * 周方案上传
 * @param {*} week
 */
export function uploadWeekDay(data) {
  return template('uploadWeekDay')(data)
}
/**
 * 感应检测器方向上传
 */
export function uploadInduceSignals(data) {
  return template('uploadInduceSignals')(data)
}
/**
 * 检测器参数上传
 */
export function uploadActiveDetector(data) {
  return template('uploadActiveDetector')(data)
}
/**
 * 感应方案上传
 */
export function uploadActivePlan(data) {
  return template('uploadActivePlan')(data)
}

/**
 * 配时方案上传
 */
export function uploadProgram(data) {
  return template('uploadProgram')(data)
}

export default {
  uploadDayPlan,
  uploadHolidayPlan,
  uploadWeekDay,
  uploadInduceSignals,
  uploadActiveDetector,
  uploadActivePlan,
  uploadProgram
}
