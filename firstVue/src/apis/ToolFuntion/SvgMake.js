import grapLamps from '@/../static/grapLamps.png'
import greenLamps from '@/../static/greenLamps.png'
import redLamps from '@/../static/redLamps.png'

/**
 * 倒计时
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 */
export function countDown (element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, type, fill, x, y, width, height, fontSize, remark, transform, amphenolCon} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  if (type === 'countDown' && (fill !== '#BBBBBB' || color !== undefined)) {
    let symbolCD = document.createElementNS('http://www.w3.org/2000/svg', 'symbol')
    let rectCD = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    let textCD = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    let useCD = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    var interDefs = document.getElementById(ID + 'Def')
    if (document.getElementById(ID) === null && interDefs === null && rectCD) {
      rectCD.setAttribute('x', x)
      rectCD.setAttribute('y', y)
      rectCD.setAttribute('width', width)
      rectCD.setAttribute('height', height)
      rectCD.setAttribute('id', 'rect' + ID)
      rectCD.setAttribute('fill', color === undefined ? fill : color)
      rectCD.setAttribute('name', 'rectcountDown')
      textCD.setAttribute('x', Number(x) + (Number(width) / 2) - 5)
      textCD.setAttribute('y', Number(y) + (Number(height) / 2) + 5)
      textCD.setAttribute('fill', '#000000')
      textCD.setAttribute('id', 'text' + ID)
      textCD.setAttribute('name', 'textcountDown')
      textCD.setAttribute('font-size', fontSize)
      symbolCD.appendChild(rectCD)
      symbolCD.appendChild(textCD)
      symbolCD.setAttribute('id', 'symbol' + ID)
      symbolCD.setAttribute('name', 'symbolcountDown')
      interDefs.appendChild(symbolCD)
      useCD.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#symbol' + ID)
      useCD.setAttribute('id', ID)
      useCD.setAttribute('name', 'countDown')
      useCD.setAttribute('remark', remark)
      useCD.setAttribute('transform', transform === undefined ? '' : transform)
      useCD.setAttribute('amphenolCon', amphenolCon === undefined ? '' : amphenolCon)
      mysvg.appendChild(useCD)
      document.getElementById('text' + ID).innerHTML = '0'
    }
  }
}
/**
 * 人行灯 图
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 */
export function pedestrianLampPic (element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, stroke, x, y, width, height, transform, amphenolCon} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  if (ID.indexOf('pedestrianLampPic') >= 0 && (stroke !== '#BBBBBB' || color !== undefined)) {
    let image = document.createElementNS('http://www.w3.org/2000/svg', 'image')
    if (document.getElementById(ID) === null && image) {
      image.setAttribute('x', x)
      image.setAttribute('y', y)
      image.setAttribute('width', width)
      image.setAttribute('height', height)
      if (stroke === 'RED') {
        image.href.baseVal = redLamps
      } else if (stroke === 'GREEN') {
        image.href.baseVal = greenLamps
      } else {
        image.href.baseVal = grapLamps // 关键一句，设置image的url图片，要用image.href.baseVal
      }
      image.setAttribute('id', ID)
      image.setAttribute('name', 'pedestrianLampPic')
      image.setAttribute('transform', transform === undefined ? '' : transform)
      image.setAttribute('amphenolCon', amphenolCon === undefined ? '' : amphenolCon)
      mysvg.appendChild(image)
    }
  }
}
/**
 * 箭头灯
 */
export function arrowLight(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, fill, x, y, transform, amphenolCon} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  if (ID.indexOf('arrowLight') >= 0 && (fill !== '#BBBBBB' || color !== undefined)) {
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    var symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol')
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    var interDefs = document.getElementById(id + 'Def')
    if (document.getElementById(ID) === null && interDefs === null && use) {
      if (document.getElementById('symbol' + ID.substring(ID.indexOf('arrowLight'))) === null) {
        symbol.setAttribute('id', 'symbol' + ID.substring(ID.indexOf('arrowLight')))
        symbol.setAttribute('overflow', 'visible')
        circle.setAttribute('id', 'circle' + ID.substring(ID.indexOf('arrowLight')))
        circle.setAttribute('cx', 30)
        circle.setAttribute('cy', 30)
        circle.setAttribute('r', 30)
        circle.setAttribute('stroke', color === undefined ? fill : color)
        circle.setAttribute('fill', 'none')
        circle.setAttribute('stroke-width', 5)
        circle.setAttribute('transform', 'matrix(0.33,0,0,0.33,0.67,0.67)')
        circle.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        path.setAttribute('id', 'path' + ID.substring(ID.indexOf('arrowLight')))
        path.setAttribute('d', 'M189.741,122.217l-62.317-29.503v15.271H58.716v28.465h68.708v15.271L189.741,122.217z')
        path.setAttribute('transform', 'matrix(0,0.141,-0.172,0,31.43004,-6.430005)')
        path.setAttribute('fill', color === undefined ? fill : color)
        path.setAttribute('fill-opacity', '1')
        path.setAttribute('stroke-width', '3')
        path.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        symbol.appendChild(circle)
        symbol.appendChild(path)
        interDefs.appendChild(symbol)
      } else {
        document.getElementById('circle' + ID.substring(ID.indexOf('arrowLight'))).setAttribute('stroke', color === undefined ? fill : color)
        document.getElementById('path' + ID.substring(ID.indexOf('arrowLight'))).setAttribute('fill', color === undefined ? fill : color)
      }
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#symbol' + ID.substring(ID.indexOf('arrowLight')))
      use.setAttribute('id', ID)
      use.setAttribute('x', x)
      use.setAttribute('y', y)
      use.setAttribute('fill', color === undefined ? fill : color)
      use.setAttribute('name', 'arrowLight')
      use.setAttribute('transform', transform === undefined ? '' : transform)
      use.setAttribute('amphenolCon', amphenolCon === undefined ? '' : amphenolCon)
      mysvg.appendChild(use)
    }
  }
}
/**
 * 圆灯
 */
export function lamps(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, type, cx, cy, rx, ry, fill, transform, amphenolCon} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  if (type === 'lamps' && (fill !== '#BBBBBB' || color !== undefined)) {
    var rectObj = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
    if (document.getElementById(ID) === null && rectObj) {
      rectObj.setAttribute('cx', cx)
      rectObj.setAttribute('cy', cy)
      rectObj.setAttribute('rx', rx)
      rectObj.setAttribute('ry', ry)
      rectObj.setAttribute('id', ID)
      rectObj.setAttribute('name', 'lamps')
      rectObj.setAttribute('fill', color === undefined ? fill : color)
      rectObj.setAttribute('transform', transform === undefined ? '' : transform)
      rectObj.setAttribute('amphenolCon', amphenolCon === undefined ? '' : amphenolCon)
      mysvg.appendChild(rectObj)
    }
  }
}
/**
 * 转弯箭头
 */
export function wheelArrow(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, type, stroke, points, fill, transform, amphenolCon, strokeWidth, strokeOpacity} = element
  let {color, ID, markertype} = para
  ID = ID === undefined ? id : ID
  if (type === 'wheelArrow' && (stroke !== '#BBBBBB' || color !== undefined)) {
    var wheelArrow = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
    if (wheelArrow) {
      wheelArrow.setAttribute('points', points)
      wheelArrow.setAttribute('amphenolCon', amphenolCon)
      wheelArrow.setAttribute('fill', fill)
      wheelArrow.setAttribute('type', type)
      wheelArrow.setAttribute('id', ID)
      wheelArrow.setAttribute('name', 'wheelArrow')
      wheelArrow.setAttribute('stroke-width', strokeWidth)
      wheelArrow.setAttribute('stroke', color === undefined ? stroke : color)
      wheelArrow.setAttribute('stroke-opacity', strokeOpacity)
      wheelArrow.setAttribute('style', 'cursor: pointer')
      wheelArrow.setAttribute('transform', transform === undefined ? '' : transform)
      if (wheelArrow.getAttribute('stroke') === 'GREEN') {
        wheelArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowGREEN)' : 'url(#markerArrowGREEN' + markertype + ')')
      } else if (wheelArrow.getAttribute('stroke') === 'YELLOW') {
        wheelArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowYELLOW)' : 'url(#markerArrowYELLOW' + markertype + ')')
      } else {
        wheelArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowRED)' : 'url(#markerArrowRED' + markertype + ')')
      }
      mysvg.appendChild(wheelArrow)
    }
  }
}
/**
 * 直线箭头
 */
export function arrowStraight(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, type, stroke, x1, x2, y1, y2, strokeWidth, transform, amphenolCon} = element
  let {color, ID, markertype} = para
  ID = ID === undefined ? id : ID
  if (type === 'arrowStraight' && (stroke !== '#BBBBBB' || color !== undefined)) {
    var arrowStraight = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    if (arrowStraight) {
      arrowStraight.setAttribute('x1', x1)
      arrowStraight.setAttribute('x2', x2)
      arrowStraight.setAttribute('y1', y1)
      arrowStraight.setAttribute('y2', y2)
      arrowStraight.setAttribute('amphenolCon', amphenolCon)
      arrowStraight.setAttribute('name', 'arrowStraight')
      arrowStraight.setAttribute('id', ID)
      arrowStraight.setAttribute('stroke-width', strokeWidth)
      arrowStraight.setAttribute('stroke', color === undefined ? stroke : color)
      arrowStraight.setAttribute('style', 'cursor: pointer')
      arrowStraight.setAttribute('transform', transform === undefined ? '' : transform)
      if (arrowStraight.getAttribute('stroke') === 'GREEN') {
        arrowStraight.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowGREEN)' : 'url(#markerArrowGREEN' + markertype + ')')
      } else if (arrowStraight.getAttribute('stroke') === 'YELLOW') {
        arrowStraight.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowYELLOW)' : 'url(#markerArrowYELLOW' + markertype + ')')
      } else {
        arrowStraight.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowRED)' : 'url(#markerArrowRED' + markertype + ')')
      }
      mysvg.appendChild(arrowStraight)
    }
  }
}
/**
 * Uturn 箭头
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 * @param {*} markertype
 */
export function uturnArrow(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, type, stroke, d, strokeOpacity, strokeWidth, transform, amphenolCon, fill} = element
  let {color, ID, markertype} = para
  ID = ID === undefined ? id : ID
  if (type === 'uturnArrow' && (stroke !== '#BBBBBB' || color !== undefined)) { // Uturn 箭头
    var uturnArrow = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    if (uturnArrow) {
      uturnArrow.setAttribute('d', d)
      uturnArrow.setAttribute('fill', fill)
      uturnArrow.setAttribute('type', type)
      uturnArrow.setAttribute('amphenolCon', amphenolCon)
      uturnArrow.setAttribute('id', ID)
      uturnArrow.setAttribute('name', 'uturnArrow')
      uturnArrow.setAttribute('stroke-width', strokeWidth)
      uturnArrow.setAttribute('stroke', color === undefined ? stroke : color)
      uturnArrow.setAttribute('stroke-opacity', strokeOpacity)
      uturnArrow.setAttribute('style', 'cursor: pointer')
      uturnArrow.setAttribute('transform', transform === undefined ? '' : transform)
      if (uturnArrow.getAttribute('stroke') === 'GREEN') {
        uturnArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowGREEN)' : 'url(#markerArrowGREEN' + markertype + ')')
      } else if (uturnArrow.getAttribute('stroke') === 'YELLOW') {
        uturnArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowYELLOW)' : 'url(#markerArrowYELLOW' + markertype + ')')
      } else {
        uturnArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowRED)' : 'url(#markerArrowRED' + markertype + ')')
      }
      mysvg.appendChild(uturnArrow)
    }
  }
}
/**
 * 人行箭头
 * @param {*} element
 * @param {*} mysvg
 * @param {*} color
 * @param {*} markertype
 */
export function pedestrianLampArrow(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, type, stroke, x1, x2, y1, y2, strokeWidth, transform, amphenolCon, fill, markerEnd, markerStart, strokeOpacity} = element
  let {color, ID, markertype} = para
  ID = ID === undefined ? id : ID
  if (type === 'pedestrianLampArrow' && (stroke !== '#BBBBBB' || color !== undefined)) {
    var pedestrianLampArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    if (pedestrianLampArrow) {
      pedestrianLampArrow.setAttribute('x1', x1)
      pedestrianLampArrow.setAttribute('y1', y1)
      pedestrianLampArrow.setAttribute('x2', x2)
      pedestrianLampArrow.setAttribute('y2', y2)
      pedestrianLampArrow.setAttribute('amphenolCon', amphenolCon)
      pedestrianLampArrow.setAttribute('fill', fill)
      pedestrianLampArrow.setAttribute('type', type)
      pedestrianLampArrow.setAttribute('id', ID)
      pedestrianLampArrow.setAttribute('name', 'pedestrianLampArrow')
      pedestrianLampArrow.setAttribute('stroke-width', strokeWidth)
      pedestrianLampArrow.setAttribute('stroke', color === undefined ? stroke : color)
      pedestrianLampArrow.setAttribute('marker-end', markerEnd)
      pedestrianLampArrow.setAttribute('marker-start', markerStart)
      pedestrianLampArrow.setAttribute('stroke-opacity', strokeOpacity)
      pedestrianLampArrow.setAttribute('style', 'cursor: pointer')
      pedestrianLampArrow.setAttribute('transform', transform === undefined ? '' : transform)
      if (pedestrianLampArrow.getAttribute('stroke') === 'GREEN') {
        pedestrianLampArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowGREEN)' : 'url(#markerArrowGREEN' + markertype + ')')
        pedestrianLampArrow.setAttribute('marker-start', markertype === undefined ? 'url(#markerArrowBackGREEN)' : 'url(#markerArrowBackGREEN' + markertype + ')')
      } else if (pedestrianLampArrow.getAttribute('stroke') === 'YELLOW') {
        pedestrianLampArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowYELLOW)' : 'url(#markerArrowYELLOW' + markertype + ')')
        pedestrianLampArrow.setAttribute('marker-start', markertype === undefined ? 'url(#markerArrowBackYELLOW)' : 'url(#markerArrowBackYELLOW' + markertype + ')')
      } else {
        pedestrianLampArrow.setAttribute('marker-end', markertype === undefined ? 'url(#markerArrowRED)' : 'url(#markerArrowRED' + markertype + ')')
        pedestrianLampArrow.setAttribute('marker-start', markertype === undefined ? 'url(#markerArrowBackRED)' : 'url(#markerArrowBackRED' + markertype + ')')
      }
      mysvg.appendChild(pedestrianLampArrow)
    }
  }
}
export function line(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, x1, y1, x2, y2, stroke, strokeWidth, transform, type} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  var line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  if (line) {
    line.setAttribute('x1', x1)
    line.setAttribute('y1', y1)
    line.setAttribute('x2', x2)
    line.setAttribute('y2', y2)
    if (type === 'imaginaryLine') {
      line.setAttribute('name', 'imaginaryLine')
      line.setAttribute('stroke-dasharray', '3.3')
    } else {
      line.setAttribute('name', 'line')
    }
    line.setAttribute('id', ID)
    line.setAttribute('stroke', color === undefined ? stroke : color)
    line.setAttribute('stroke-width', strokeWidth)
    line.setAttribute('style', 'cursor: pointer')
    line.setAttribute('transform', transform === undefined ? '' : transform)
    mysvg.appendChild(line)
  }
}
export function bight(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, d, type, stroke, strokeWidth, transform} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  var bight = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  if (bight) {
    bight.setAttribute('d', d)
    if (type === 'imaginaryBight') {
      bight.setAttribute('name', 'imaginaryBight')
      bight.setAttribute('stroke-dasharray', '3.3')
    } else {
      bight.setAttribute('name', 'bight')
    }
    bight.setAttribute('id', ID)
    bight.setAttribute('stroke-opacity', '1')
    bight.setAttribute('stroke-width', strokeWidth)
    bight.setAttribute('stroke', color === undefined ? stroke : color)
    bight.setAttribute('fill', 'none')
    bight.setAttribute('style', 'cursor: pointer')
    bight.setAttribute('transform', transform === undefined ? '' : transform)
    mysvg.appendChild(bight)
  }
}
export function string(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, x, y, fill, scale, transform, value} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  let doc = document.getElementById(ID)
  if (doc === null) {
    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    if (text) {
      text.setAttribute('x', x)
      text.setAttribute('y', y)
      text.setAttribute('fill', color === undefined ? fill : color)
      text.setAttribute('id', ID)
      text.setAttribute('font-size', scale)
      text.setAttribute('name', 'string')
      text.setAttribute('style', 'cursor: pointer')
      text.setAttribute('transform', transform === undefined ? '' : transform)
      mysvg.appendChild(text)
      doc.innerHTML = value
    }
  }
}
export function crossWalk(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, x1, y1, x2, y2, fill, transform} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  if (rect) {
    let width = x2 - x1
    let height = y2 - y1
    rect.setAttribute('x', x1)
    rect.setAttribute('y', y1)
    rect.setAttribute('width', width < 0 ? 0 - width : width)
    rect.setAttribute('height', height < 0 ? 0 - height : height)
    rect.setAttribute('id', ID)
    rect.setAttribute('name', 'crossWalk')
    rect.setAttribute('fill', color === undefined ? fill : color)
    rect.setAttribute('transform', transform === undefined ? '' : transform)
    mysvg.appendChild(rect)
  }
}
export function triangle(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, d, stroke, transform} = element
  let {color, ID} = para
  ID = ID === undefined ? id : ID
  var triangle = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  if (triangle) {
    triangle.setAttribute('d', d)
    triangle.setAttribute('name', 'triangle')
    triangle.setAttribute('id', ID)
    triangle.setAttribute('stroke-opacity', '1')
    triangle.setAttribute('stroke', color === undefined ? stroke : color)
    triangle.setAttribute('fill', 'none')
    triangle.setAttribute('style', 'cursor: pointer')
    triangle.setAttribute('transform', transform === undefined ? '' : transform)
    mysvg.appendChild(triangle)
  }
}
export function addSvgDomByOb(element, mysvg, para) {
  if (mysvg === null || mysvg === undefined) return
  const {id, color} = para
  let paraM = null
  if (id !== undefined) {
    paraM = {ID: id, color}
  } else {
    paraM = {color}
  }
  const {name} = element
  if (name === 'countDown') {
    this.countDown(element, mysvg, paraM)
  } else if (name === 'pedestrianLampPic') {
    this.pedestrianLampPic(element, mysvg, paraM)
  } else if (name === 'arrowLight') {
    this.arrowLight(element, mysvg, paraM)
  } else if (name === 'lamps') {
    this.lamps(element, mysvg, paraM)
  } else if (name === 'wheelArrow') {
    this.wheelArrow(element, mysvg, paraM)
  } else if (name === 'arrowStraight') {
    this.arrowStraight(element, mysvg, paraM)
  } else if (name === 'uturnArrow') {
    this.uturnArrow(element, mysvg, paraM)
  } else if (name === 'pedestrianLampArrow') {
    this.pedestrianLampArrow(element, mysvg, paraM)
  } else if (name === 'line') {
    this.line(element, mysvg, paraM)
  } else if (name === 'bight') {
    this.bight(element, mysvg, paraM)
  } else if (name === 'string') {
    this.string(element, mysvg, paraM)
  } else if (name === 'crossWalk') {
    this.crossWalk(element, mysvg, paraM)
  } else if (name === 'triangle') {
    this.triangle(element, mysvg, paraM)
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
  addSvgDomByOb
}
