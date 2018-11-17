import { templateJrPhasePlanPost, templateprotocolControllerPost } from '../baseUrls'
/**
 * 相位信息查询
 * @param {*} cross
 */
export function queryrJrPhasePlan (obj) {
  return templateJrPhasePlanPost('queryrJrPhasePlanList')(obj)
}

/**
 * 相位信息添加
 * @param {*} cross
*/
export function addJrPhasePlan (obj) {
  return templateJrPhasePlanPost('jrPhasePlan')(obj)
}

/**
 * 相位信息删除
 * @param {*} cross
*/
export function deleteJrPhase (obj) {
  return templateJrPhasePlanPost('jrPhasePlan')(obj)
}

/**
 * 相位信息修改
 * @param {*} cross
*/
export function updateJrPhase (obj) {
  return templateJrPhasePlanPost('jrPhasePlan')(obj)
}

/**
 * 相位信息上传
 * @param {*} cross
*/
export function updateJrPhasePlan (obj) {
  return templateprotocolControllerPost('queryPhase')(obj)
}

/**
 * 相位信息下载
 * @param {*} cross
*/
export function dowmJrPhasePlan (obj) {
  return templateprotocolControllerPost('setPhase')(obj)
}

/**
 * 相位信息保存
 * @param {*} cross
*/
export function presJrPhasePlan (obj) {
  return templateJrPhasePlanPost('addJrPhasePlanList')(obj)
}

/**
 * 相位信息刷新
 * @param {*} cross
*/
export function refsJrPhasePlan (obj) {
  return templateJrPhasePlanPost('jrPhasePlan')(obj)
}

export default {
  queryrJrPhasePlan,
  refsJrPhasePlan,
  dowmJrPhasePlan,
  updateJrPhasePlan,
  presJrPhasePlan
}
