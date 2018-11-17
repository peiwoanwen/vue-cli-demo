import { templateDownControllerPost } from '../baseUrls'

/**
 * 上传日时方案
 */
export function downloadDayPlan (dayPlanList) {
  return templateDownControllerPost('downloadDayPlan')(dayPlanList)
}
/**
 * 周方案下载
 * @param {*} week
 */
export function downloadWeekPlan (week) {
  return templateDownControllerPost('downloadWeekPlan')(week)
}
/**
 * 假期方案上传
 * @param {*} list
 */
export function downloadHoliDayPlan (list) {
  return templateDownControllerPost('downloadHoliDayPlan')(list)
}
/**
 * 感应检测器方向上传
 * @param {*} crossId
 * @param {*} records
 */
export function downInduceSignals (crossId, records) {
  var induceSignalsList = []
  for (var i = 0; i < records.length; i++) {
    var delay = 0
    var extent = 0
    if (records[i].checkedDelay === true) {
      delay = 1
    } else {
      delay = 0
    }
    if (records[i].checkedExtent === true) {
      extent = 1
    } else {
      extent = 0
    }
    induceSignalsList.push({
      crossId: crossId,
      detectorNo: records[i].detectorNo,
      lampGroups: records[i].value,
      delay: delay,
      extent: extent,
      saturationFlow: 0,
      fixedSaturation: 0
    })
  }
  return templateDownControllerPost('downInduceSignals')(induceSignalsList)
}
/**
 * 检测器参数下载
 * @param {*} list
 */
export function downActiveDetector (list) {
  return templateDownControllerPost('downActiveDetector')(list)
}
/**
 * 感应方案下载
 * @param {*} list
 */
export function downActivePlan (list) {
  return templateDownControllerPost('downActivePlan')(list)
}
/**
 * 配时方案下载
 * @param {*} list
 */
export function downProgram (list) {
  return templateDownControllerPost('downProgram')(list)
}

export default {
  downloadDayPlan,
  downloadWeekPlan,
  downloadHoliDayPlan,
  downInduceSignals,
  downActiveDetector,
  downActivePlan,
  downProgram
}
