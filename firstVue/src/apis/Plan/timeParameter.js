import { templateAddJrPeriodPlanListPost, templateQuerySegmentListPost } from '../baseUrls'

/**
 * 保存时段参数
 * @param {*} timeData
 */
export function addJrPeriodPlanList (timeData) {
  return templateAddJrPeriodPlanListPost('addJrPeriodPlanList')(timeData)
}

/**
 * 查询时段表号
 * @param {*} crossId
 */
export function queryJrPeriodPlanNo (crossId) {
  return templateAddJrPeriodPlanListPost('queryJrPeriodPlanNo')(crossId)
}

/**
 * 查询时段方案
 * @param {*} crossId amd timeTableNumber
 */
export function queryJrPeriodPlan (crossId) {
  return templateAddJrPeriodPlanListPost('queryJrPeriodPlan')(crossId)
}

/**
 * 下载时段方案
 * @param {*} timeData
 */
export function setSegment (timeData) {
  return templateQuerySegmentListPost('setSegment')(timeData)
}

/**
 * 上传时段方案
 * @param {*} timeData
 */
export function querySegment (timeData) {
  return templateQuerySegmentListPost('querySegment')(timeData)
}

export default {
  addJrPeriodPlanList,
  queryJrPeriodPlanNo,
  queryJrPeriodPlan,
  setSegment,
  querySegment
}
