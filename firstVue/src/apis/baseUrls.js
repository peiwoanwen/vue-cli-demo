import axios from 'axios'
import { BASE_URL } from './contant'
axios.defaults.withCredentials = true
const BASE_PROGRAM_URL = `${BASE_URL}/Program`
const done = response => response

const BASE_CROSSINGCONTROLLER1032_URL = `${BASE_URL}/crossingController1032`
const BASE_PHASEORDER_URL = `${BASE_URL}/phaseOrder`
const BASE_DAYPLAN_URL = `${BASE_URL}/dayPlan`
const BASE_AREAVIPTASK_URL = `${BASE_URL}/areaVipTask`
const BASE_DEVICE_URL = `${BASE_URL}/device`
const BASE_SHAPE_URL = `${BASE_URL}/shape`
const BASE_CONTROLLERGISINFO_URL = `${BASE_URL}/controllerGisInfo`
const BASE_VIPTASKTIME_URL = `${BASE_URL}/vipTaskTime`
const BASE_UPCONTROLLER_URL = `${BASE_URL}/upController`
const BASE_UP1032CONTROLLER_URL = `${BASE_URL}/up1032Controller`
const BASE_DOWNCONTROLLER_URL = `${BASE_URL}/downController`
const BASE_DOWN1032CONTROLLER_URL = `${BASE_URL}/down1032Controller`
const BASE_JRPHASEPLAN_URL = `${BASE_URL}/jrPhasePlan`
const BASE_JRTIMEPLAN_URL = `${BASE_URL}/jrTimePlan`
const BASE_JRDISPATCHPLAN_URL = `${BASE_URL}/jrDispatchPlan`
const BASE_CONTROLLER_URL = `${BASE_URL}/controller`
const BASE_PUBPHASEORDER_URL = `${BASE_URL}/pubPhaseOrder`
const BASE_DICTINFO_URL = `${BASE_URL}/dictInfo`
const BASE_ACTIVEDETECTOR_URL = `${BASE_URL}/activeDetector`
const BASE_DETECTORS_URL = `${BASE_URL}/detectors`
const BASE_WEEKDAY_URL = `${BASE_URL}/weekDay`
const BASE_HOLIDAY_URL = `${BASE_URL}/holiday`
const BASE_ACTIVEPLAN_URL = `${BASE_URL}/activePlan`
const BASE_INDUCESIGNALS_URL = `${BASE_URL}/induceSignals`
const BASE_AREACROSSINFO_URL = `${BASE_URL}/areaCrossInfo`
const BASE_SUBAREA_URL = `${BASE_URL}/subArea`
const BASE_CONTROLLERMONITOR_URL = `${BASE_URL}/ControllerMonitor`
const BASE_CROSSINGCONTROLLER_URL = `${BASE_URL}/crossingController`
const BASE_LAMPSTATUS_URL = `${BASE_URL}/lampStatus`
const BASE_UPLOAD_URL = `${BASE_URL}/upload`
const BASE_DOWNLOADCONTROLLER_URL = `${BASE_URL}/downLoadController`
const BASE_TIMECONTROLLER_URL = `${BASE_URL}/timeController`
const BASE_BATCHMANAGEMENT_URL = `${BASE_URL}/batchManagement`
const BASE_SYSTEMCONFIG_URL = `${BASE_URL}/systemConfig`
const BASE_CCUCONFIG_URL = `${BASE_URL}/ccuConfig`
const BASE_SYSTEMPARAMETER_URL = `${BASE_URL}/systemParameter`
const BASE_PRIVILEGEDEPT_URL = `${BASE_URL}/privilege/dept`
const BASE_DEPARTMENTS_URL = `${BASE_URL}/departments`
const BASE_PRIVILEGERESOURCE_URL = `${BASE_URL}/privilege/resource`
const BASE_PRIVILEGEROLE_URL = `${BASE_URL}/privilege/role`
const BASE_ROLES_URL = `${BASE_URL}/roles`
const BASE_PRIVILEGEACL_URL = `${BASE_URL}/privilege/acl`
const BASE_PRIVILEGEUSER_URL = `${BASE_URL}/privilege/user`
const BASE_USER_URL = `${BASE_URL}/user`
const BASE_USERSCONTROLLER_URL = `${BASE_URL}/usersController`
const BASE_CROSSUSER_URL = `${BASE_URL}/crossUser`
const BASE_AUTOSUBAREA_URL = `${BASE_URL}/autoSubArea`
const BASE_SUBAREACROSS_URL = `${BASE_URL}/subAreaCross`
const BASE_TFICROSS_URL = `${BASE_URL}/tFICross`
const BASE_TRCONTROLLER_URL = `${BASE_URL}/trController`
const BASE_DEVICESTATCONTROL_URL = `${BASE_URL}/deviceStatControl`
const BASE_DEVICES_URL = `${BASE_URL}/trController`
const BASE_EXPLAN_URL = `${BASE_URL}/expPlan`
const BASE_EXPDAYPLAN_URL = `${BASE_URL}/expDayPlan`
const BASE_EXPPROGRAM_URL = `${BASE_URL}/expProgram`
const BASE_EXPHOLIDAY_URL = `${BASE_URL}/expHoliday`
const BASE_EXPPHASEORDER_URL = `${BASE_URL}/expPhaseOrder`
const BASE_ADDJRSTAGEPLAN_URL = `${BASE_URL}/jrStagePlan`
const BASE_EXPERPLAN_URL = `${BASE_URL}/experPlan`
const BASE_ADDJRPERIODPLANLIST_URL = `${BASE_URL}/jrPeriodPlan`
const BASE_EXPERCROSS_URL = `${BASE_URL}/experCross`
const BASE_QUERYSEGMENT_URL = `${BASE_URL}/protocol2099Controller`
const BASE_PROTOCOLCONTROLLER_URL = `${BASE_URL}/protocol2099Controller`
const BASE_OPERATELOG_URL = `${BASE_URL}/operateLog`
const BASE_EXPUPANDDOWN_URL = `${BASE_URL}/expUpAndDown`
const BASE_INCORDANCE_URL = `${BASE_URL}/incordance`
const BASE_TRAFFICABNORNALIM_URL = `${BASE_URL}/trafficAbnormalM`
const BASE_STATUS = `${BASE_URL}/user/login/service`

export const templateExpUpAndDownPost = (action) => (data) => {
  const url = `${BASE_EXPUPANDDOWN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateProgramPost = (action) => (data) => {
  const url = `${BASE_PROGRAM_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateCrossingController1032Post = (action) => (data) => {
  const url = `${BASE_CROSSINGCONTROLLER1032_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatePhaseOrderPost = (action) => (data) => {
  const url = `${BASE_PHASEORDER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDayPlanPost = (action) => (data) => {
  const url = `${BASE_DAYPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateAreaVipTaskPost = (action) => (data) => {
  const url = `${BASE_AREAVIPTASK_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDevicePost = (action) => (data) => {
  const url = `${BASE_DEVICE_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateShapePost = (action) => (data) => {
  const url = `${BASE_SHAPE_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateControllerGisInfoPost = (action) => (data) => {
  const url = `${BASE_CONTROLLERGISINFO_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateVipTaskTimePost = (action) => (data) => {
  const url = `${BASE_VIPTASKTIME_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateUpControllerPost = (action) => (data) => {
  const url = `${BASE_UPCONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateUp1032ControllerPost = (action) => (data) => {
  const url = `${BASE_UP1032CONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDownControllerPost = (action) => (data) => {
  const url = `${BASE_DOWNCONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDown1032ControllerPost = (action) => (data) => {
  const url = `${BASE_DOWN1032CONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateJrPhasePlanPost = (action) => (data) => {
  const url = `${BASE_JRPHASEPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatejrTimePlanPost = (action) => (data) => {
  const url = `${BASE_JRTIMEPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatejrDispatchPlanPost = (action) => (data) => {
  const url = `${BASE_JRDISPATCHPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
// export const templateQueryHolidayPost = (action) => (data) => {
//   const url = `${BASE_PROTOCOLCONTROLLER_URL}/${action}`
//   return axios.post(url, data).then(done)
// }
export const templateControllerPost = (action) => (data) => {
  const url = `${BASE_CONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatePubPhaseOrderPost = (action) => (data) => {
  const url = `${BASE_PUBPHASEORDER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDictInfoPost = (action) => (data) => {
  const url = `${BASE_DICTINFO_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateActiveDetectorPost = (action) => (data) => {
  const url = `${BASE_ACTIVEDETECTOR_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDetectorsPost = (action) => (data) => {
  const url = `${BASE_DETECTORS_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateWeekDayPost = (action) => (data) => {
  const url = `${BASE_WEEKDAY_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateHolidayPost = (action) => (data) => {
  const url = `${BASE_HOLIDAY_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateActivePlanPost = (action) => (data) => {
  const url = `${BASE_ACTIVEPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateInduceSignalsPost = (action) => (data) => {
  const url = `${BASE_INDUCESIGNALS_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateAreaCrossInfoPost = (action) => (data) => {
  const url = `${BASE_AREACROSSINFO_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateSubAreaPost = (action) => (data) => {
  const url = `${BASE_SUBAREA_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateControllerMonitorPost = (action) => (data) => {
  const url = `${BASE_CONTROLLERMONITOR_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateCrossingControllerPost = (action) => (data) => {
  const url = `${BASE_CROSSINGCONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateLampStatusPost = (action) => (data) => {
  const url = `${BASE_LAMPSTATUS_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateUploadPost = (action) => (data) => {
  const url = `${BASE_UPLOAD_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateUploadGet = (action) => (data) => {
  const url = `${BASE_UPLOAD_URL}/${action}`
  return axios.get(url).then(done)
}
export const templateDownLoadControllerPost = (action) => (data) => {
  const url = `${BASE_DOWNLOADCONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateTimeControllerPost = (action) => (data) => {
  const url = `${BASE_TIMECONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateBatchManagementPost = (action) => (data) => {
  const url = `${BASE_BATCHMANAGEMENT_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateSystemConfigPost = (action) => (data) => {
  const url = `${BASE_SYSTEMCONFIG_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateCcuConfigPost = (action) => (data) => {
  const url = `${BASE_CCUCONFIG_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateCcuConfigGet = (action) => (data) => {
  const url = `${BASE_CCUCONFIG_URL}/${action}`
  return axios.get(url, data).then(done)
}
export const templateSystemParameterPost = (action) => (data) => {
  const url = `${BASE_SYSTEMPARAMETER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatePrivilegeDeptPost = (action) => (data) => {
  const url = `${BASE_PRIVILEGEDEPT_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDepartmentsPost = (action) => (data) => {
  const url = `${BASE_DEPARTMENTS_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatePrivilegeResourcePost = (action) => (data) => {
  const url = `${BASE_PRIVILEGERESOURCE_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatePrivilegeRolePost = (action) => (data) => {
  const url = `${BASE_PRIVILEGEROLE_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateRolesPost = (action) => (data) => {
  const url = `${BASE_ROLES_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatePrivilegeAclPost = (action) => (data) => {
  const url = `${BASE_PRIVILEGEACL_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateUserPost = (action) => (data) => {
  const url = `${BASE_USER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatePrivilegeUserPost = (action) => (data) => {
  const url = `${BASE_PRIVILEGEUSER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateUsersControllerPost = (action) => (data) => {
  const url = `${BASE_USERSCONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateCrossUserPost = (action) => (data) => {
  const url = `${BASE_CROSSUSER_URL}/${action}`
  return axios.post(url, data).then(done)
}
// export const templateAutoSubAreaGet = (action) => (data) => {
//   const url = `${BASE_AUTOSUBAREA_URL}/${action}`
//   return axios.get(url).then(done)
// }
export const templateAutoSubAreaGet = (action) => (data) => {
  const url = `${BASE_AUTOSUBAREA_URL}/${action}`
  return axios.post(url).then(done)
}
export const templateLeftAutoSubAreaPost = (action) => (data) => {
  const url = `${BASE_AUTOSUBAREA_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateSubAreaGet = (action) => (data) => {
  const url = `${BASE_SUBAREA_URL}/${action}`
  return axios.get(url).then(done)
}
export const templateSubAreaCrossPost = (action) => (data) => {
  const url = `${BASE_SUBAREACROSS_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateTFICrossPost = (action) => (data) => {
  const url = `${BASE_TFICROSS_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateTrControllerPost = (action) => (data) => {
  const url = `${BASE_TRCONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDeviceStatControlPost = (action) => (data) => {
  const url = `${BASE_DEVICESTATCONTROL_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateDevicesPost = (action) => (data) => {
  const url = `${BASE_DEVICES_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateExpPlanPost = (action) => (data) => {
  const url = `${BASE_EXPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateExpDayPlanPost = (action) => (data) => {
  const url = `${BASE_EXPDAYPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateExpProgramPost = (action) => (data) => {
  const url = `${BASE_EXPPROGRAM_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateExpHolidayPost = (action) => (data) => {
  const url = `${BASE_EXPHOLIDAY_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateExpPhaseOrderPost = (action) => (data) => {
  const url = `${BASE_EXPPHASEORDER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateJrStagePlanPost = (action) => (data) => {
  const url = `${BASE_ADDJRSTAGEPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateExperPlanPost = (action) => (data) => {
  const url = `${BASE_EXPERPLAN_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateExperCrossPost = (action) => (data) => {
  const url = `${BASE_EXPERCROSS_URL}/${action}`
  return axios.post(url, data).then(done)
}
// export const templateSetStepPost = (action) => (data) => {
//   const url = `${BASE_SETSTEP_URL}/${action}`
//   return axios.post(url, data).then(done)
// }
export const templateAddJrPeriodPlanListPost = (action) => (data) => {
  const url = `${BASE_ADDJRPERIODPLANLIST_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateQuerySegmentListPost = (action) => (data) => {
  const url = `${BASE_QUERYSEGMENT_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateprotocolControllerPost = (action) => (data) => {
  const url = `${BASE_PROTOCOLCONTROLLER_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateoperateLogControllerPost = (action) => (data) => {
  const url = `${BASE_OPERATELOG_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templateincordanceControllerPost = (action) => (data) => {
  const url = `${BASE_INCORDANCE_URL}/${action}`
  return axios.post(url, data).then(done)
}
export const templatetrafficAbnormalMControllerPost = (action) => (data) => {
  const url = `${BASE_TRAFFICABNORNALIM_URL}/${action}`
  return axios.post(url).then(done)
}
export const templateDoPost = (action) => (data) => {
  const url = `${BASE_STATUS}/${action}`
  return axios.post(url, data).then(done)
}