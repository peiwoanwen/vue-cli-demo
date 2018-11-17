import { templatejrTimePlanPost, templateprotocolControllerPost } from '../baseUrls'

/**
 * 配时方案查询
 * @param {*} cross
 */
export function queryParameters (obj) {
  return templatejrTimePlanPost('queryrJrTimePlan')(obj)
}

/**
 * 相位信息上传
 * @param {*} cross
*/
export function updateParameters (obj) {
  return templateprotocolControllerPost('queryProgram')(obj)
}

/**
 * 相位信息下载
 * @param {*} cross
*/
export function dowmParameters (obj) {
  return templateprotocolControllerPost('setProgram')(obj)
}

/**
 * 相位信息保存
 * @param {*} cross
*/
export function presParameters (obj) {
  return templatejrTimePlanPost('addJrTimePlanList')(obj)
}

export default {
  queryParameters,
  dowmParameters,
  updateParameters,
  presParameters
}
