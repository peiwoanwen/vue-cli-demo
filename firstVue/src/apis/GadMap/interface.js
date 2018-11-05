import { templateDevicePost, templateDoPost } from '../baseUrls'

/**
 * 查询所有已标绘的设备的坐标
 * @param {*} no
 */
export function queryControllerHasGis () {
  return templateDevicePost('queryControllerHasGis')()
}

/**
 * 登陆过滤
 * @param {*} no
 */
export function status () {
  return templateDoPost('status')()
}

export function loginDo (data) {
  return templateDoPost('do')(data)
}

export default {
  queryControllerHasGis,
  loginDo,
  status
}
