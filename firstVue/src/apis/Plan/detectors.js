import { templateActiveDetectorPost, templateDetectorsPost } from '../baseUrls'
/**
 * 根据CrossId 查询检测器参数
 * @param {*} crossId
 */
export function queryADByCrossId (crossId) {
  return templateActiveDetectorPost('queryADByCrossId')({crossId: crossId})
}
/**
 * 根据CrossId 查询检测器检测区间参数
 * @param {*} crossId
 */
export function queryDetectorsList (crossId) {
  return templateDetectorsPost('queryDetectorsList')({crossId: crossId})
}
/**
 * 修改检测器检测区间参数
 * @param {*} crossId, records
 */
export function editDetectorsList (crossId, records) {
  var _list = []
  for (var i in records) {
    _list.push({crossId: crossId, detectorId: records[i].detectorId, avgLength: records[i].avgLength, lopDis: records[i].lopDis, lopWid: records[i].lopWid})
  }
  return templateDetectorsPost('editDetectorsList')(_list)
}
/**
 * 修改检测器参数
 * @param {*} autoDetectors
 */
export function updateADByCrossId (autoDetectors) {
  return templateActiveDetectorPost('updateADByCrossId')(autoDetectors)
}
export default {
  queryADByCrossId,
  queryDetectorsList,
  editDetectorsList,
  updateADByCrossId
}
