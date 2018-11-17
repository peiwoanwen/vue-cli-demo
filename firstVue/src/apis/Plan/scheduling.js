import { templatejrDispatchPlanPost, templateprotocolControllerPost } from '../baseUrls'
/**
 * 相位信息查询
 * @param {*} cross
 */
export function queryJrDispatchPlan (obj) {
  return templatejrDispatchPlanPost('queryJrDispatchPlan')(obj)
}

/**
 * 相位信息上传
 * @param {*} cross
*/
export function queryHoliday (obj) {
  return templateprotocolControllerPost('queryHoliday')(obj)
}

/**
 * 调度页面上传
 * @param {*} cross
*/
export function setHoliday (obj) {
  return templateprotocolControllerPost('setHoliday')(obj)
}

/**
 * 相位信息保存
 * @param {*} cross
*/
export function presJrDispatchPlan (obj) {
  return templatejrDispatchPlanPost('addPhasePlanList')(obj)
}

/**
 * 调度查询
 * @param {*} cross
*/
export function queryJrDispatchPlanNo (obj) {
  return templatejrDispatchPlanPost('queryJrDispatchPlanNo')(obj)
}

/**
 * 调度保存(LIST)
 * @param {*} cross
*/
export function addJrDispatchPlanList (obj) {
  return templatejrDispatchPlanPost('addJrDispatchPlanList')(obj)
}

/**
 * 调度保存(单个)
 * @param {*} cross
*/
export function addJrDispatchPlan (obj) {
  return templatejrDispatchPlanPost('addJrDispatchPlan')(obj)
}

export default {
  queryJrDispatchPlan,
  queryHoliday,
  setHoliday,
  presJrDispatchPlan,
  queryJrDispatchPlanNo,
  addJrDispatchPlanList,
  addJrDispatchPlan
}
