import { templatePhaseOrderPost, templateUpControllerPost, templateUp1032ControllerPost,
  templateDownControllerPost, templateDown1032ControllerPost } from '../baseUrls'

/**
 * 获取所有得相位号
 * @param {*} crossId
 */
export function queryAllCurrentPhaseOrderByCrossId (crossId) {
  return templatePhaseOrderPost('queryAllCurrentPhaseOrderByCrossId')({crossId: crossId})
}
/**
 * 获取所有的相序号
 * @param {*} crossId
 */
export function queryAllPhaseOrderByCrossId (crossId) {
  return templatePhaseOrderPost('queryAllPhaseOrderByCrossId')({crossId: crossId})
}
export function editPhaseOrder (phaseOrder) {
  return templatePhaseOrderPost('editPhaseOrder')(phaseOrder)
}
/**
 * 相序方案不分页查询
 * @param {*传入相序方案中的任意字段} phaseOrder
 */
export function queryPhaseOrderList (phaseOrder) {
  return templatePhaseOrderPost('queryPhaseOrderList')(phaseOrder)
}
/**
 * 删除UTC相序
 * @param {*} crossId
 */
export function deletePhaseOrderByPhaseNo (phaseOrder) {
  return templatePhaseOrderPost('deletePhaseOrderByPhaseNo')(phaseOrder)
}
/**
 * 判断是否正在使用
 * @param {*} crossId
 */
export function queryPhaseOrderID (phaseOrder) {
  return templatePhaseOrderPost('queryPhaseOrderID')(phaseOrder)
}
/**
 * 上传
 * @param {*} crossId
 */
export function uploadPhaseOrder (uploadContent) {
  return templateUpControllerPost('uploadPhaseOrder')(uploadContent)
}

export function upEit (uploadContent) {
  return templateUp1032ControllerPost('uploadPhaseOrder')(uploadContent)
}
/**
 * 下载
 * @param {*}
 */
export function downPhaseOrder (downloadContent) {
  return templateDownControllerPost('downPhaseOrder')(downloadContent)
}

export function downA (downloadContent) {
  return templateDown1032ControllerPost('downPhaseOrder')(downloadContent)
}
/**
 * 根据crossId查出不同的相序号、相位数、相序描述
 * @param {*}
 */
export function queryPhaseOrder (list) {
  return templatePhaseOrderPost('queryPhaseOrderInfo')(list)
}

/**
 * 批量保存相序方案
 * @param {*}
 */
export function addPhaseOrderList (list) {
  return templatePhaseOrderPost('addPhaseOrderList')(list)
}
/**
 * 根据crossId跟 相序号取  相位号
 * @param {*} crossId
 */
export function queryAllPhaseOrderByCrossIdphaseOrderId (phaseOrder) {
  return templatePhaseOrderPost('queryAllPhaseOrderByCrossIdphaseOrderId')(phaseOrder)
}

export default {
  queryAllPhaseOrderByCrossIdphaseOrderId,
  queryAllCurrentPhaseOrderByCrossId,
  queryAllPhaseOrderByCrossId,
  editPhaseOrder,
  queryPhaseOrderList,
  deletePhaseOrderByPhaseNo,
  queryPhaseOrderID,
  uploadPhaseOrder,
  upEit,
  downPhaseOrder,
  downA,
  queryPhaseOrder,
  addPhaseOrderList
}
