import { templateCrossingControllerPost, templateCrossingController1032Post,
  templateLampStatusPost, templateprotocolControllerPost } from '../baseUrls'

/**
 * 重链接
 * 传入设备crossid
 */
export function reconnection (crossId) {
  return templateCrossingControllerPost('reconnection')(crossId)
}
/**
 * 闪烁
 * 传入设备crossid
 */
export function flash (crossId) {
  return templateCrossingControllerPost('flash')(crossId)
}

export function Vflash (crossId) {
  return templateCrossingController1032Post('v30Flash')(crossId)
}
/**
 * 重启
 * 传入设备crossid
 */
export function reset (crossId) {
  return templateCrossingControllerPost('reset')(crossId)
}
/**
 * 关灯
 * 传入设备crossid
 */
export function turnOff (crossId) {
  return templateCrossingControllerPost('turnOff')(crossId)
}
/**
 * 对时
 * 传入设备crossid
 */
export function adjustTime (crossId) {
  return templateCrossingControllerPost('adjustTime')(crossId)
}

/**
 * 自动控制
 * 传入设备crossid
 */
export function autoCont (crossId) {
  return templateCrossingControllerPost('autoCont')(crossId)
}

/**
 * 步进
 * 传入设备crossid
 */
export function step (crossId) {
  return templateCrossingControllerPost('step')(crossId)
}

export function Vstep (crossId) {
  return templateCrossingController1032Post('v30Step')(crossId)
}
/**
 * 正常
 * 传入设备crossid
 */
export function normal (crossId) {
  return templateCrossingControllerPost('normal')(crossId)
}

export function Vnormal (crossId) {
  return templateCrossingController1032Post('v30Normal')(crossId)
}
/**
 * openSignal  1 打开    0 关闭
 * 传入设备crossid
 * type  1: 只取灯态 2：只取当前方案信息 3：只取初始化监视状态 4：只取灯态，当前方案信息
 *  5：只取灯态，初始化监视状态 6：只取当前方案信息，初始化监视状态 7：全部
 */
export function initCurrentProgram (crossId, openSignal, type) {
  return templateLampStatusPost('initCurrentProgram')({'crossId': crossId, 'openSignal': openSignal, 'type': type})
}
/**
 * 正常
 * {crossIds: this.crossIdList}, {type: [7]}]
 *  type  1: 只取灯态 2：只取当前方案信息 3：只取初始化监视状态 4：只取灯态，当前方案信息
 *  5：只取灯态，初始化监视状态 6：只取当前方案信息，初始化监视状态 7：全部
 */
export function initCurrentProgramMap (data) {
  return templateLampStatusPost('initCurrentProgramMap')(data)
}
/**
 * 方案
 * 传入设备crossid
 */
export function centerManual (crossId, type, pg) {
  return templateCrossingControllerPost('centerManualMonitor')({'crossId': crossId + 'x' + type + 'x' + pg})
}

export function timedTask (programList) {
  return templateCrossingControllerPost('timedTask')(programList)
}

/**
 * 取左树的初始状态
 * @param {*} programList
 */
export function initCurrentProgramLefttree () {
  return templateLampStatusPost('initCurrentProgramLefttree')()
}

/**
 * 信号机状态
 * @param {*} programList
 */
export function signalStatus (obj) {
  return templateLampStatusPost('initConnectStatus')(obj)
}
/**
 * 信号机查询
 * @param {*} programList
 */
export function signalSearch (obj) {
  return templateLampStatusPost('serchController')(obj)
}
//  刚进故障信息查询页面时调的接口
export function signalAllSearch (obj) {
  return templateLampStatusPost('serchAllController')(obj)
}

/**
 * initcache 2099
 * @param {*} cache
 */

export function initCachestatus (obj) {
  return templateLampStatusPost('status')(obj)
}

export function initCachelamp (obj) {
  return templateLampStatusPost('lamp')(obj)
}

/**
 * 2099 路口 手动
 * @param {*} ctrol
*/
export function NautoCont(obj) {
  return templateprotocolControllerPost('centerManual')(obj)
}

/**
 * 2099 全红
 * @param {*} ctrol
*/
export function NallRed(obj) {
  return templateprotocolControllerPost('centerManual')(obj)
}

/**
 * 2099 闪烁
 * @param {*} ctrol
*/
export function Nflash(obj) {
  return templateprotocolControllerPost('centerManual')(obj)
}

/**
 * 2099 关灯
 * @param {*} ctrol
*/
export function NturnOff(obj) {
  return templateprotocolControllerPost('centerManual')(obj)
}

/**
 * 2099 步进
 * @param {*} ctrol
*/
export function Nstep(obj) {
  return templateprotocolControllerPost('centerManual')(obj)
}

/**
 * 2099 跳相
 * @param {*} ctrol
*/
export function NturnPhaseOpen(obj) {
  return templateprotocolControllerPost('centerManual')(obj)
}

/**
 * 2099 对时
 * @param {*} ctrol
*/
export function NadjustTime(obj) {
  return templateprotocolControllerPost('setDateTime')(obj)
}

/**
 * 2099 重起
 * @param {*} ctrol
*/
export function Nreset(obj) {
  return templateprotocolControllerPost('centerManual')(obj)
}

/**
 * 20999 灯态初始值
 * @param {*} ctrol
*/
export function lamp (crossId) {
  return templateLampStatusPost('lamp')(crossId)
}

/**
 * 20999 状态初始值
 * @param {*} ctrol
*/
export function status (crossId) {
  return templateLampStatusPost('status')(crossId)
}

export default {
  reconnection,
  flash,
  Vflash,
  reset,
  turnOff,
  adjustTime,
  step,
  Vstep,
  normal,
  Vnormal,
  initCurrentProgram,
  initCurrentProgramMap,
  centerManual,
  timedTask,
  signalStatus,
  signalSearch,
  signalAllSearch,
  initCurrentProgramLefttree,
  initCachestatus,
  initCachelamp,
  NautoCont,
  NallRed,
  Nflash,
  NturnOff,
  Nstep,
  NturnPhaseOpen,
  NadjustTime,
  Nreset,
  lamp,
  status
}
