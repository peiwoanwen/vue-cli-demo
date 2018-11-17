/**
 * 倒计时
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 */
export function countDown (element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    width: element.pointers.split(',')[1].split(';')[0],
    height: element.pointers.split(',')[1].split(';')[1],
    id: id !== undefined ? id : element.type + count,
    type: 'countDown',
    fontSize: element.scale,
    fill: color !== undefined ? color : element.color,
    remark: element.remark,
    amphenolCon: element.direction,
    transform: element.transform === undefined ? '' : element.transform
  }
}
/**
 * 人行灯 图
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 */
export function pedestrianLampPic (element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    width: element.pointers.split(',')[1].split(';')[0],
    height: element.pointers.split(',')[1].split(';')[1],
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    type: 'pedestrianLampArrow',
    remark: element.remark,
    amphenolCon: element.direction,
    transform: element.transform === undefined ? '' : element.transform
  }
}
/**
 * 箭头灯
 */
export function arrowLight(element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    fill: color !== undefined ? color : element.color,
    id: id !== undefined ? id : element.type + count,
    remark: element.remark,
    transform: element.transform === undefined ? '' : element.transform,
    amphenolCon: element.direction
  }
}
/**
 * 圆灯
 */
export function lamps(element, para) {
  const {id, color, count} = para
  return {
    cx: element.pointers.split(',')[0].split(';')[0],
    cy: element.pointers.split(',')[0].split(';')[1],
    rx: element.scale,
    ry: element.scale,
    fill: color !== undefined ? color : element.color,
    type: 'lamps',
    id: id !== undefined ? id : element.type + count,
    remark: element.remark,
    amphenolCon: element.direction,
    transform: element.transform === undefined ? '' : element.transform
  }
}
/**
 * 转弯箭头
 */
export function wheelArrow(element, para) {
  const {id, color, count} = para
  let points = element.pointers.split(',')[0].split(';')[0] + ' ' + element.pointers.split(',')[0].split(';')[1] + ',' + element.pointers.split(',')[1].split(';')[0] + ' ' + element.pointers.split(',')[1].split(';')[1] + ',' + element.pointers.split(',')[2].split(';')[0] + ' ' + element.pointers.split(',')[2].split(';')[1]
  return {
    points: points,
    fill: 'none',
    type: 'wheelArrow',
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    strokeWidth: element.scale,
    markerEnd: 'url(#markerArrow)',
    strokeOpacity: 1,
    remark: element.remark,
    amphenolCon: element.direction,
    transform: element.transform === undefined ? '' : element.transform
  }
}
/**
 * 直线箭头
 */
export function arrowStraight(element, para) {
  const {id, color, count} = para
  return {
    x1: element.pointers.split(',')[0].split(';')[0],
    y1: element.pointers.split(',')[0].split(';')[1],
    x2: element.pointers.split(',')[1].split(';')[0],
    y2: element.pointers.split(',')[1].split(';')[1],
    type: 'arrowStraight',
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    strokeWidth: element.scale,
    markerEnd: 'url(#markerArrow)',
    remark: element.remark,
    amphenolCon: element.direction,
    transform: element.transform === undefined ? '' : element.transform
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
  const {id, color, count} = para
  return {
    d: 'M ' + element.pointers.split(',')[0].split(';')[0] + ',' + element.pointers.split(',')[0].split(';')[1] + 'Q ' + element.pointers.split(',')[1].split(';')[0] + ',' + element.pointers.split(',')[1].split(';')[1] + ' ' + element.pointers.split(',')[2].split(';')[0] + ',' + element.pointers.split(',')[2].split(';')[1],
    fill: 'none',
    type: 'uturnArrow',
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    strokeWidth: element.scale,
    markerEnd: 'url(#markerArrow)',
    strokeOpacity: 1,
    remark: element.remark,
    amphenolCon: element.direction,
    transform: element.transform === undefined ? '' : element.transform
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
  const {id, color, count} = para
  return {
    x1: element.pointers.split(',')[0].split(';')[0],
    y1: element.pointers.split(',')[0].split(';')[1],
    x2: element.pointers.split(',')[1].split(';')[0],
    y2: element.pointers.split(',')[1].split(';')[1],
    fill: 'none',
    type: 'pedestrianLampArrow',
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    strokeWidth: element.scale,
    markerEnd: 'url(#markerArrow)',
    markerStart: 'url(#markerArrowBack)',
    strokeOpacity: 1,
    remark: element.remark,
    amphenolCon: element.direction,
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function line(element, para) {
  const {id, color, count} = para
  return {
    x1: element.pointers.split(',')[0].split(';')[0],
    y1: element.pointers.split(',')[0].split(';')[1],
    x2: element.pointers.split(',')[1].split(';')[0],
    y2: element.pointers.split(',')[1].split(';')[1],
    type: element.type === 'imaginaryLine' ? 'imaginaryLine' : 'line',
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    strokeWidth: element.scale,
    remark: element.remark,
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function bight(element, para) {
  const {id, color, count} = para
  return {
    d: 'M ' + element.pointers.split(',')[0].split(';')[0] + ',' + element.pointers.split(',')[0].split(';')[1] + 'Q ' + element.pointers.split(',')[1].split(';')[0] + ',' + element.pointers.split(',')[1].split(';')[1] + ' ' + element.pointers.split(',')[2].split(';')[0] + ',' + element.pointers.split(',')[2].split(';')[1],
    type: element.type === 'imaginaryBight' ? 'imaginaryBight' : 'bight',
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    strokeWidth: element.scale,
    remark: element.remark,
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function string(element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    fill: color !== undefined ? color : element.color,
    id: id !== undefined ? id : element.type + count,
    fontSize: element.scale,
    remark: element.remark,
    value: element.text,
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function crossWalk(element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    width: element.pointers.split(',')[1].split(';')[0],
    height: element.pointers.split(',')[1].split(';')[1],
    fill: color !== undefined ? color : element.color,
    id: id !== undefined ? id : element.type + count,
    remark: element.remark,
    name: 'crossWalk',
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function triangle(element, para) {
  const {id, color, count} = para
  return {
    d: 'M ' + element.pointers.split(',')[0].split(';')[0] + ',' + element.pointers.split(',')[0].split(';')[1] + 'L ' + element.pointers.split(',')[1].split(';')[0] + ',' + element.pointers.split(',')[1].split(';')[1] + ' ' + element.pointers.split(',')[2].split(';')[0] + ',' + element.pointers.split(',')[2].split(';')[1] + 'Z',
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    remark: element.remark,
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function flow(element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    width: element.pointers.split(',')[1].split(';')[0],
    height: element.pointers.split(',')[1].split(';')[1],
    fill: color !== undefined ? color : element.color,
    id: id !== undefined ? id : element.type + count,
    remark: element.remark,
    name: 'flow',
    transform: element.transform === undefined ? '' : element.transform,
    amphenolCon: element.direction,
    deviceId: element.deviceid !== undefined ? '0' : element.deviceId
  }
}
export function video(element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    width: element.pointers.split(',')[1].split(';')[0],
    height: element.pointers.split(',')[1].split(';')[1],
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    type: 'video',
    remark: element.remark,
    videoUrl: element.videoUrl,
    amphenolCon: element.direction,
    deviceId: element.deviceid !== undefined ? '0' : element.deviceId,
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function detector(element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    width: element.pointers.split(',')[1].split(';')[0],
    height: element.pointers.split(',')[1].split(';')[1],
    id: id !== undefined ? id : element.type + count,
    type: 'detector',
    fill: color !== undefined ? color : element.color,
    fontSize: element.scale,
    remark: element.remark,
    deviceId: element.deviceid !== undefined ? '0' : element.deviceId,
    transform: element.transform === undefined ? '' : element.transform,
    amphenolCon: element.direction
  }
}
export function speed(element, para) {
  const {id, color, count} = para
  return {
    x: element.pointers.split(',')[0].split(';')[0],
    y: element.pointers.split(',')[0].split(';')[1],
    width: element.pointers.split(',')[1].split(';')[0],
    height: element.pointers.split(',')[1].split(';')[1],
    id: id !== undefined ? id : element.type + count,
    type: 'speed',
    fill: color !== undefined ? color : element.color,
    fontSize: element.scale,
    remark: element.remark,
    amphenolCon: element.direction,
    deviceId: element.deviceid !== undefined ? '0' : element.deviceId,
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function queueLength(element, para) {
  const {id, color, count} = para
  return {
    x1: element.pointers.split(',')[0].split(';')[0],
    y1: element.pointers.split(',')[0].split(';')[1],
    x2: element.pointers.split(',')[1].split(';')[0],
    y2: element.pointers.split(',')[1].split(';')[1],
    type: 'queueLength',
    id: id !== undefined ? id : element.type + count,
    stroke: color !== undefined ? color : element.color,
    strokeWidth: element.scale,
    remark: element.remark,
    amphenolCon: element.direction,
    deviceId: element.deviceid !== undefined ? '0' : element.deviceId,
    transform: element.transform === undefined ? '' : element.transform
  }
}
export function getRouteObject(element, para) {
  if (element.type === 'countDown') {
    return this.countDown(element, para)
  } else if (element.type === 'pedestrianLampPic') {
    return this.pedestrianLampPic(element, para)
  } else if (element.type === 'arrowLight') {
    return this.arrowLight(element, para)
  } else if (element.type === 'lamps') {
    return this.lamps(element, para)
  } else if (element.type === 'wheelArrow') {
    return this.wheelArrow(element, para)
  } else if (element.type === 'arrowStraight') {
    return this.arrowStraight(element, para)
  } else if (element.type === 'uturnArrow') {
    return this.uturnArrow(element, para)
  } else if (element.type === 'pedestrianLampArrow') {
    return this.pedestrianLampArrow(element, para)
  } else if (element.type === 'line') {
    return this.line(element, para)
  } else if (element.type === 'bight') {
    return this.bight(element, para)
  } else if (element.type === 'string') {
    return this.string(element, para)
  } else if (element.type === 'crossWalk') {
    return this.crossWalk(element, para)
  } else if (element.type === 'triangle') {
    return this.triangle(element, para)
  } else if (element.type === 'flow') {
    return this.flow(element, para)
  } else if (element.type === 'video') {
    return this.video(element, para)
  } else if (element.type === 'detector') {
    return this.detector(element, para)
  } else if (element.type === 'speed') {
    return this.speed(element, para)
  } else if (element.type === 'queueLength') {
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
  getRouteObject
}
