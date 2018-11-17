import { templateProgramPost, templateCrossingController1032Post,
  templatePhaseOrderPost, templateDayPlanPost} from '../baseUrls'
/**
 * 方案号载入
 * @param {*} crossId
 */
export function queryAllProgramNO (crossId) {
  return templateProgramPost('queryAllProgramNO')({crossId: crossId})
}
/**
 * 方案号载入1032
 * @param {*} obj
 */
export function VqueryAllProgramNO (obj) {
  return templateCrossingController1032Post('v30Program')(obj)
}
/**
 * 相序号载入
 * @param {*} crossId
 */
export function getAllPhaseOrderId (_list) {
  if (_list.phaseOrderId !== undefined) {
    _list.phaseOrderId = parseInt(_list.phaseOrderId, 16)
  }
  return templatePhaseOrderPost('queryAllPhaseOrderByCrossId')(_list)
}
/**
 * 根据方案号跟crossId取数据
 * @param {*} crossId
 */
export function queryProgramByProgramNO (crossId, programNO) {
  return templateProgramPost('queryProgramByProgramNO')({crossId: crossId, programNO: programNO})
}

/**
 * 保存
 * @param {*} _list
 */
export function save (_list) {
  return templateProgramPost('updateProgram')(_list)
}

/**
 * 保存(创建方案号)
 * @param {*} _list
 */
export function addProgramNO (_list) {
  return templateProgramPost('addProgramNO')(_list)
}

/**
 * 查询方案号是否被使用
 * @param {*} _list
 */
export function checkProgramUsed (_list) {
  return templateDayPlanPost('queryDayPlanbyCrossidProgramNO')(_list)
}

/**
 * 查询两个配时方案对比结果
 * @param {*[{'crossId'，'planNo'},{'crossId'，'planNo'}]} _arr
 */
export function queryProgramCompare (_arr) {
  return templateProgramPost('queryProgramCompare')(_arr)
}

/**
 * 根据crossId和配时方案号删除配时方案
 */
export function delProgramByProgramNO (program) {
  return templateProgramPost('delProgramByProgramNO')(program)
}

export default {
  queryAllProgramNO,
  VqueryAllProgramNO,
  getAllPhaseOrderId,
  queryProgramByProgramNO,
  save,
  addProgramNO,
  checkProgramUsed,
  queryProgramCompare,
  delProgramByProgramNO
}
