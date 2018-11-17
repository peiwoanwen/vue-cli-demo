const getAttribute = (dom, type) => {
  return dom.getAttribute(type)
}
const getRAT = (dom, type) => {
  return getAttribute(dom, type) === null ? '' : getAttribute(dom, type)
}
const getX = (dom) => {
  return getAttribute(dom, 'x')
}
const getY = (dom) => {
  return getAttribute(dom, 'y')
}
const getX1 = (dom) => {
  return getAttribute(dom, 'x1')
}
const getY1 = (dom) => {
  return getAttribute(dom, 'y1')
}
const getX2 = (dom) => {
  return getAttribute(dom, 'x2')
}
const getY2 = (dom) => {
  return getAttribute(dom, 'y2')
}
const getWidth = (dom) => {
  return getAttribute(dom, 'width')
}
const getHeight = (dom) => {
  return getAttribute(dom, 'height')
}
const getFontSize = (dom) => {
  return getAttribute(document.getElementById('text' + dom.id), 'font-size')
}
const getFill = (dom) => {
  return getAttribute(dom, 'fill')
}
const getStroke = (dom) => {
  return getAttribute(dom, 'stroke')
}
const getStrokeWidth = (dom) => {
  return getAttribute(dom, 'stroke-width')
}
const getMarkerEnd = (dom) => {
  return getAttribute(dom, 'marker-end')
}
const getMarkerStart = (dom) => {
  return getAttribute(dom, 'marker-start')
}
const getStrokeOpacity = (dom) => {
  return getAttribute(dom, 'stroke-opacity')
}
const getPoints = (dom) => {
  return getAttribute(dom, 'points')
}
const getCx = (dom) => {
  return getAttribute(dom, 'cx')
}
const getCy = (dom) => {
  return getAttribute(dom, 'cy')
}
const getRx = (dom) => {
  return getAttribute(dom, 'rx')
}
const getRy = (dom) => {
  return getAttribute(dom, 'ry')
}
const getD = (dom) => {
  return getAttribute(dom, 'd')
}
const getDeviceid = (dom) => {
  return getAttribute(dom, 'deviceid') === null ? '0' : getAttribute(dom, 'deviceid')
}
const getAmphenolCon = (dom) => {
  return getAttribute(dom, 'amphenolCon') === null ? 0 : Number(getAttribute(dom, 'amphenolCon'))
}
/**
 * 倒计时
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 */
export function countDown (element, para) {
  const {id, color} = para
  return {
    x: getX(element),
    y: getY(element),
    width: getWidth(element),
    height: getHeight(element),
    id: id !== undefined ? id : element.id,
    type: 'countDown',
    name: 'countDown',
    fontSize: getFontSize(element),
    fill: color !== undefined ? color : getFill(element),
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    transform: getRAT(element, 'transform')
  }
}
/**
 * 人行灯 图
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 */
export function pedestrianLampPic (element, para) {
  const {id} = para
  return {
    x: getX(element),
    y: getY(element),
    width: getWidth(element),
    height: getHeight(element),
    id: id !== undefined ? id : element.id,
    type: 'pedestrianLampArrow',
    name: 'pedestrianLampArrow',
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    transform: getRAT(element, 'transform')
  }
}
/**
 * 箭头灯
 */
export function arrowLight(element, para) {
  const {id, color} = para
  return {
    x: getX(element),
    y: getY(element),
    fill: color !== undefined ? color : getFill(element),
    id: id !== undefined ? id : element.id,
    type: 'arrowLight',
    name: 'arrowLight',
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    transform: getRAT(element, 'transform')
  }
}
/**
 * 圆灯
 */
export function lamps(element, para) {
  const {id, color} = para
  return {
    cx: getCx(element),
    cy: getCy(element),
    rx: getRx(element),
    ry: getRy(element),
    fill: color !== undefined ? color : getFill(element),
    type: 'lamps',
    name: 'lamps',
    id: id !== undefined ? id : element.id,
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    transform: getRAT(element, 'transform')
  }
}
/**
 * 转弯箭头
 */
export function wheelArrow(element, para) {
  const {id, color} = para
  return {
    points: getPoints(element),
    fill: 'none',
    type: 'wheelArrow',
    name: 'wheelArrow',
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    strokeWidth: getStrokeWidth(element),
    markerEnd: getMarkerEnd(element),
    strokeOpacity: getStrokeOpacity(element),
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    transform: getRAT(element, 'transform')
  }
}
/**
 * 直线箭头
 */
export function arrowStraight(element, para) {
  const {id, color} = para
  return {
    x1: getX1(element),
    y1: getY1(element),
    x2: getX2(element),
    y2: getY2(element),
    type: 'arrowStraight',
    name: 'arrowStraight',
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    strokeWidth: getStrokeWidth(element),
    markerEnd: getMarkerEnd(element),
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    transform: getRAT(element, 'transform')
  }
}
/**
 * Uturn 箭头
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 * @param {*} markertype
 */
export function uturnArrow(element, para) {
  const {id, color} = para
  return {
    d: getD(element),
    fill: 'none',
    type: 'uturnArrow',
    name: 'uturnArrow',
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    strokeWidth: getStrokeWidth(element),
    markerEnd: getMarkerEnd(element),
    strokeOpacity: getStrokeOpacity(element),
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    transform: getRAT(element, 'transform')
  }
}
/**
 * 人行箭头
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 * @param {*} markertype
 */
export function pedestrianLampArrow(element, para) {
  const {id, color} = para
  return {
    x1: getX1(element),
    y1: getY1(element),
    x2: getX2(element),
    y2: getY2(element),
    fill: 'none',
    type: 'pedestrianLampArrow',
    name: 'pedestrianLampArrow',
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    strokeWidth: getStrokeWidth(element),
    markerEnd: getMarkerEnd(element),
    markerStart: getMarkerStart(element),
    strokeOpacity: getStrokeOpacity(element),
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    transform: getRAT(element, 'transform')
  }
}
export function line(element, para) {
  const {id, color} = para
  return {
    x1: getX1(element),
    y1: getY1(element),
    x2: getX2(element),
    y2: getY2(element),
    type: getAttribute(element, 'type') === 'imaginaryLine' ? 'imaginaryLine' : 'line',
    name: getAttribute(element, 'name') === 'imaginaryLine' ? 'imaginaryLine' : 'line',
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    strokeWidth: getStrokeWidth(element),
    remark: getRAT(element, 'remark'),
    transform: getRAT(element, 'transform')
  }
}
export function bight(element, para) {
  const {id, color} = para
  return {
    d: getD(element),
    type: getAttribute(element, 'type') === 'imaginaryBight' ? 'imaginaryBight' : 'bight',
    name: getAttribute(element, 'name') === 'imaginaryBight' ? 'imaginaryBight' : 'bight',
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    strokeWidth: getStrokeWidth(element),
    remark: getRAT(element, 'remark'),
    transform: getRAT(element, 'transform')
  }
}
export function string(element, para) {
  const {id, color} = para
  return {
    x: getX(element),
    y: getY(element),
    fill: color !== undefined ? color : getFill(element),
    id: id !== undefined ? id : element.id,
    fontSize: getAttribute(element, 'font-size'),
    value: element.innerHTML,
    remark: getRAT(element, 'remark'),
    transform: getRAT(element, 'transform'),
    name: 'string'
  }
}
export function crossWalk(element, para) {
  const {id, color} = para
  return {
    x: getX(element),
    y: getY(element),
    width: getWidth(element),
    height: getHeight(element),
    fill: color !== undefined ? color : getFill(element),
    id: id !== undefined ? id : element.id,
    name: 'crossWalk',
    remark: getRAT(element, 'remark'),
    transform: getRAT(element, 'transform')
  }
}
export function triangle(element, para) {
  const {id, color} = para
  return {
    d: getD(element),
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    remark: getRAT(element, 'remark'),
    transform: getRAT(element, 'transform'),
    name: 'triangle'
  }
}
export function flow(element, para) {
  const {id, color} = para
  return {
    x: getX(element),
    y: getY(element),
    width: getWidth(element),
    height: getHeight(element),
    fill: color !== undefined ? color : getFill(element),
    id: id !== undefined ? id : element.id,
    remark: getRAT(element, 'remark'),
    transform: getRAT(element, 'transform'),
    name: 'flow',
    amphenolCon: getAmphenolCon(element),
    deviceId: getDeviceid(element)
  }
}
export function video(element, para) {
  const {id, color} = para
  return {
    x: getX(element),
    y: getY(element),
    width: getWidth(element),
    height: getHeight(element),
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    type: 'video',
    name: 'video',
    remark: getRAT(element, 'remark'),
    videoUrl: getAttribute(element, 'videoUrl'),
    amphenolCon: getAmphenolCon(element),
    deviceId: getDeviceid(element),
    transform: getRAT(element, 'transform')
  }
}
export function detector(element, para) {
  const {id, color} = para
  return {
    x: getX(element),
    y: getY(element),
    width: getWidth(element),
    height: getHeight(element),
    id: id !== undefined ? id : element.id,
    type: 'detector',
    name: 'detector',
    fill: color !== undefined ? color : getFill(element),
    fontSize: getFontSize(element),
    remark: getRAT(element, 'remark'),
    deviceId: getDeviceid(element),
    transform: getRAT(element, 'transform'),
    amphenolCon: getRAT(element, 'amphenolCon')
  }
}
export function speed(element, para) {
  const {id, color} = para
  return {
    x: getX(element),
    y: getY(element),
    width: getWidth(element),
    height: getHeight(element),
    id: id !== undefined ? id : element.id,
    type: 'speed',
    name: 'speed',
    fill: color !== undefined ? color : getFill(element),
    fontSize: getFontSize(element),
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    deviceId: getDeviceid(element),
    transform: getRAT(element, 'transform')
  }
}
export function queueLength(element, para) {
  const {id, color} = para
  return {
    x1: getX1(element),
    y1: getY1(element),
    x2: getX2(element),
    y2: getY2(element),
    type: 'queueLength',
    name: 'queueLength',
    id: id !== undefined ? id : element.id,
    stroke: color !== undefined ? color : getStroke(element),
    strokeWidth: getStrokeWidth(element),
    remark: getRAT(element, 'remark'),
    amphenolCon: getAmphenolCon(element),
    deviceId: getDeviceid(element),
    transform: getRAT(element, 'transform')
  }
}
export function getObjectByElement(element, para) {
  let name = getAttribute(element, 'name')
  if (name === 'countDown') {
    return this.countDown(element, para)
  } else if (name === 'pedestrianLampPic') {
    return this.pedestrianLampPic(element, para)
  } else if (name === 'arrowLight') {
    return this.arrowLight(element, para)
  } else if (name === 'lamps') {
    return this.lamps(element, para)
  } else if (name === 'wheelArrow') {
    return this.wheelArrow(element, para)
  } else if (name === 'arrowStraight') {
    return this.arrowStraight(element, para)
  } else if (name === 'uturnArrow') {
    return this.uturnArrow(element, para)
  } else if (name === 'pedestrianLampArrow') {
    return this.pedestrianLampArrow(element, para)
  } else if (name === 'line') {
    return this.line(element, para)
  } else if (name === 'bight') {
    return this.bight(element, para)
  } else if (name === 'string') {
    return this.string(element, para)
  } else if (name === 'crossWalk') {
    return this.crossWalk(element, para)
  } else if (name === 'triangle') {
    return this.triangle(element, para)
  } else if (name === 'flow') {
    return this.flow(element, para)
  } else if (name === 'video') {
    return this.video(element, para)
  } else if (name === 'detector') {
    return this.detector(element, para)
  } else if (name === 'speed') {
    return this.speed(element, para)
  } else if (name === 'queueLength') {
    return this.queueLength(element, para)
  }
}
export default {
  countDown,
  pedestrianLampPic,
  arrowLight,
  lamps,
  wheelArrow,
  arrowStraight,
  uturnArrow,
  pedestrianLampArrow,
  line,
  bight,
  string,
  crossWalk,
  triangle,
  flow,
  video,
  detector,
  speed,
  queueLength,
  getObjectByElement
}
