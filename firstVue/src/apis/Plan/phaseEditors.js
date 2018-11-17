import { templateJrStagePlanPost } from '../baseUrls'

/**
 * 添加时段方案
 * @param {*} crossId
 */
export function addJrStagePlanList (periodPlan) {
  return templateJrStagePlanPost('addJrStagePlanList')(periodPlan)
}

/**
 * 查询阶段表号
 * @param {*} crossId
 */
export function queryrJrStagePlanNo (crossId) {
  return templateJrStagePlanPost('queryrJrStagePlanNo')(crossId)
}

/**
 * 查询相位
 * @param {*} crossId
 */
export function queryrJrStagePlan (crossId) {
  return templateJrStagePlanPost('queryrJrStagePlan')(crossId)
}

/**
 * 下载
 * @param {*} crossId
 */
export function setStep (periodPlan) {
  return templateJrStagePlanPost('setStep')(periodPlan)
}

/**
 * 上传
 * @param {*} crossId
 */
export function queryStep (periodPlan) {
  return templateJrStagePlanPost('queryStep')(periodPlan)
}

export default {
  addJrStagePlanList,
  queryrJrStagePlanNo,
  queryrJrStagePlan,
  setStep,
  queryStep
}
