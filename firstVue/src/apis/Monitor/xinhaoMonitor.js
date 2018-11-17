import { templateSubAreaPost, templateControllerMonitorPost } from '../baseUrls'

/**
 * 增加设备
 * 传入设备所有字段
 */
export function getTreeMenu () {
  return templateSubAreaPost('getTreeMenu')()
}

/**
 * 增加设备
 * 传入设备所有字段
 */
export function queryControllMonitor (list) {
  return templateControllerMonitorPost('queryControllerMonitorListByCrossIds')()
}

export default {
  getTreeMenu,
  queryControllMonitor
}
