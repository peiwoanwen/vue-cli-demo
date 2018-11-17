import { templateAreaVipTaskPost, templateDevicePost,
  templateControllerGisInfoPost, templateVipTaskTimePost, templateprotocolControllerPost, templateLampStatusPost} from '../baseUrls'
import { OBJ_TYPE } from '../contant'

/**
 * 新增特勤
 * @param {*} areaVipTask
 */
export function lockDirects (areaVipTask) {
  return templateAreaVipTaskPost('lockDirects')(areaVipTask)
}
/**
 * 新增特勤
 * @param {*} areaVipTask
 */
export function addAreaVipTask (areaVipTask) {
  areaVipTask.areaVipPlanId = OBJ_TYPE.objUTCAREAVIP
  return templateAreaVipTaskPost('addAreaVipTask')(areaVipTask)
}

/**
 * 删除设备
 * @param {*} crossId
 */
export function deleteAreaVipTask (areaVipTaskId) {
  return templateAreaVipTaskPost('deleteAreaVipTask')(areaVipTaskId)
}

/**
 * 更新
 * @param {* areaVipPlanId不为空} areaVipTask
 */
export function updateAreaVipTask (areaVipTask) {
  return templateAreaVipTaskPost('updateAreaVipTask')(areaVipTask)
}

/**
 * 查询特勤任务列表
 * @param {*} text
 */
export function queryAreaVipTaskName (text) {
  return templateAreaVipTaskPost('queryAreaVipTaskName')(text)
}

/**
 * 单个查询特勤任务
 * @param {*} areaVipTask
 */
export function queryAreaVipTask (areaVipTask) {
  return templateAreaVipTaskPost('queryAreaVipTask')(areaVipTask)
}

/**
 * 查询途径辖区
 * @param {*}
 */
export function querySubNameByCrossId (crossid) {
  return templateDevicePost('querySubNameByCrossId')(crossid)
}
/**
 * 执行特勤
 * @param {*} startVipTask
 */
export function startVipTask (implement) {
  return templateAreaVipTaskPost('startVipTask')(implement)
}
/**
 * 结束特勤
 * @param {*} endSpecial
 */
export function endVipTask (endSpecial) {
  return templateAreaVipTaskPost('endVipTask')(endSpecial)
}
/**
 * 批量执行
 * @param {*} startVipTaskAll
 */
export function startVipTaskAll (data) {
  return templateAreaVipTaskPost('startVipTaskAll')(data)
}

/**
 * 查询所有已标绘的设备的坐标
 * @param {*} no
 */
export function queryGisInfo (no) {
  return templateControllerGisInfoPost('queryGisInfo')(no)
}

/**
 * 保存特勤执行时间
 * @param {*} data
 */
export function addVipTaskTime (data) {
  return templateVipTaskTimePost('addVipTaskTime')(data)
}

/**
 * 结束特勤执行时间
 * @param {*} data
 */
export function delVipTaskTime (data) {
  return templateVipTaskTimePost('delVipTaskTime')(data)
}

/**
 * 查询特勤执行时间
 * @param {*} data
 */
export function queryVipTaskTime (data) {
  return templateVipTaskTimePost('queryVipTaskTime')(data)
}

/**
 * 查询每个设备的crossId
 * @param {*} data
 */
export function queryVipTaskTimeCrossId (data) {
  return templateVipTaskTimePost('queryVipTaskTimeCrossId')(data)
}

/**
 * GB20999设备执行特勤
 * @param {*} data
 */
export function setVip (data) {
  return templateprotocolControllerPost('setVip')(data)
}

/**
 * GB20999设备结束特勤
 * @param {*} data
 */
export function stopVip (data) {
  return templateprotocolControllerPost('stopVip')(data)
}

/**
 * 初始化方向
 * @param {*} data
 */
export function initSignal (data) {
  return templateLampStatusPost('initSignal')(data)
}

export default {
  lockDirects,
  addAreaVipTask,
  deleteAreaVipTask,
  updateAreaVipTask,
  queryAreaVipTaskName,
  queryAreaVipTask,
  querySubNameByCrossId,
  startVipTask,
  endVipTask,
  startVipTaskAll,
  queryGisInfo,
  addVipTaskTime,
  delVipTaskTime,
  queryVipTaskTime,
  queryVipTaskTimeCrossId,
  setVip,
  stopVip,
  initSignal
}
