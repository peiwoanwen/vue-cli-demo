import { templateActivePlanPost } from '../baseUrls'
/**
 * 查询方案号是否被使用
 * @param {crossId: '**'} _list
 */
export function queryActivePlanId (_list) {
  return templateActivePlanPost('queryActivePlanId')(_list)
}

/**
 * 根据感应方案号获取数据
 * @param {crossId: '**',activePlanId: '**'} _list
 */
export function getActivePlanByActivePlanId (_list) {
  return templateActivePlanPost('queryActivePlanByCrossAndActivePlanId')(_list)
}

/**
 * 保存修改
 * @param {**} _list
 */
export function updateActivePlan (_list) {
  return templateActivePlanPost('updateActivePlan')(_list)
}

/**
 * 相位数，感应方案时间参数限制
 * @param {**} _list
 */
export function queryActivePlanSetting (_list) {
  return templateActivePlanPost('queryActivePlanSetting')(_list)
}
export default {
  queryActivePlanId,
  getActivePlanByActivePlanId,
  updateActivePlan,
  queryActivePlanSetting
}
