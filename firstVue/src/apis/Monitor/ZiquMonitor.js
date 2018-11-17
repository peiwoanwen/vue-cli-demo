import { templateAreaCrossInfoPost } from '../baseUrls'
import { OBJ_TYPE } from '../constants'

/**
 * 新增或更新监视区域
 * @param {*新增或更新的区域对象} obj
 */
export function editAreaCrossInfo (obj) {
  const objId = {objId: OBJ_TYPE.objMONITORAREA}
  let monitorAreaObj = []
  if (obj.areaId === undefined) {
    monitorAreaObj.push(obj)
    monitorAreaObj.push(objId)
  } else {
    monitorAreaObj.push(obj)
  }
  return templateAreaCrossInfoPost('editAreaCrossInfo')(monitorAreaObj)
}

/**
 * 查询监视区域
 * @param {*} obj
 */
export function queryAreaCrossInfoList (obj) {
  return templateAreaCrossInfoPost('queryAreaCrossInfoList')(obj)
}

/**
 * 批量删除监视区域
 * @param {*} obj
 */
export function delAreaCrossInfoList (obj) {
  return templateAreaCrossInfoPost('delAreaCrossInfoList')(obj)
}

export default {
  editAreaCrossInfo,
  queryAreaCrossInfoList,
  delAreaCrossInfoList
}
