import { templateWeekDayPost, templateHolidayPost, templateDayPlanPost,
  templateDown1032ControllerPost, templateUp1032ControllerPost, templateProgramPost} from '../baseUrls'
/**
 * 周方案查询
 * @param {*} crossId
 */
export function queryWeekDayPlan (crossId) {
  return templateWeekDayPost('queryWeekDayList')({crossId: crossId})
}
/**
 * 日时方案号查询
 * @param {*} crossId
*/
export function queryDayPlanId (crossId) {
  return templateDayPlanPost('queryPlanNO')({crossId: crossId})
}
/**
 * 根据crossId、planNo查询日方案
 * @param {*} crossId
*/
export function queryDayPlanList (dpn) {
  return templateDayPlanPost('queryDayPlanList')(dpn)
}
export function queryOptimizeData (dpn) {
  return templateDayPlanPost('queryTrafficFlow')(dpn)
}
export function queryTrafficData (dpn) {
  return templateDayPlanPost('queryfiveMinuteTrafficFlow')(dpn)
}
export function queryNewCrossroads (dpn) {
  return templateDayPlanPost('querySubareasAndControllersTree')(dpn)
}
/**
 * 配时方案查询
 * @param {*} crossId
*/
export function queryProgram (programs) {
  return templateProgramPost('queryProgram')(programs)
}
/**
 * 2000信号机假期方案查询
 * @param {*} crossId 和planNo
 * @param {*} hol
 */
export function queryHoliday (hol) {
  return templateHolidayPost('queryHoliday')(hol)
}
/**
 * 1032信号机假期方案查询
 * @param {*} crossId 和planNo
 * @param {*} hol
 */
export function queryHolidayList (hol) {
  return templateHolidayPost('queryHolidayList')(hol)
}
/**
 * 周方案保存
 * @param {*} weekDays
 */
export function updateWeekDay (weekDays) {
  return templateWeekDayPost('updateWeekDay')(weekDays)
}
/**
 * 假期方案保存
 * @param {*} holidays
 */
export function editHoliday (holidays) {
  return templateHolidayPost('editHoliday')(holidays)
}
/**
 * 保存全部度假方案， 并添加新的数据
 * @param {*} holidays
 */
export function holidayAddNewHDList (holidays) {
  return templateHolidayPost('holidayAddHDList')(holidays)
}
/**
 * 日时方案保存
 * @param {*} adddayPlanList
 */
export function editDayPlanList (adddayPlanList) {
  return templateDayPlanPost('editDayPlanList')(adddayPlanList)
}
/**
 * 全部删除 重新添加新的数据
 * @param {*} adddayPlanList
 */
export function dayPlanAddNewDPList (adddayPlanList) {
  return templateDayPlanPost('dayPlanAddNewDPList')(adddayPlanList)
}
/**
 * 假日方案下载
 * @param {*} adddayPlanList
 */
export function downloadHoliDayPlan (adddayPlanList) {
  return templateDown1032ControllerPost('downloadHoliDayPlan')(adddayPlanList)
}
/**
 * 假日方案上传
 * @param {*} adddayPlanList
 */
export function uploadHolidayPlan (adddayPlanList) {
  return templateUp1032ControllerPost('uploadHolidayPlan')(adddayPlanList)
}
/**
 * 删除日方案上传
 * @param {*} adddayPlanList
 */
export function deleteDayPlan (adddayPlanList) {
  return templateDayPlanPost('deleteDayPlan')(adddayPlanList)
}
export default {
  deleteDayPlan,
  queryWeekDayPlan,
  queryDayPlanId,
  queryDayPlanList,
  queryHoliday,
  queryProgram,
  updateWeekDay,
  editHoliday,
  editDayPlanList,
  dayPlanAddNewDPList,
  holidayAddNewHDList,
  queryHolidayList,
  downloadHoliDayPlan,
  uploadHolidayPlan,
  queryOptimizeData,
  queryTrafficData,
  queryNewCrossroads
}
