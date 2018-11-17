import { templateInduceSignalsPost } from '../baseUrls'

/**
 * 根据crossId 查询感应检测器参数
 */
export function queryInduceSignalsList (crossId) {
  return templateInduceSignalsPost('queryInduceSignalsList')({crossId: crossId})
}
/**
 * 保存感应检测器方向设置
 * @param {*} crossId
 * @param {*} records
 */
export function updateInduceSignalsList (crossId, records) {
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
      crossId: parseInt(crossId),
      detectorNo: records[i].detectorNo,
      lampGroups: records[i].value,
      delay: delay,
      extent: extent
    })
  }
  return templateInduceSignalsPost('updateInduceSignalsList')(induceSignalsList)
}
export default {
  queryInduceSignalsList,
  updateInduceSignalsList
}
