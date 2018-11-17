import Intersection from '@/apis/Equipment/Intersection'
import specialPlan from '@/apis/Plan/specialPlan.js'
import specialPlanTool from '@/apis/ToolFuntion/specialPlan.js'
import SvgMake from '@/apis/ToolFuntion/SvgMake.js'
import _ from 'lodash'
import svgRouteMake from '@/apis/ToolFuntion/SvgRouteMake.js'
/**
 * 路口渠化  通过数组去画
 */
export function drawShapesFromArray (id, array, color, websocket, type, markertype) {
  let mysvg = document.getElementById(id)
  if (mysvg === null) {
    return
  }
  mysvg.innerHTML = ''
  let symbols = []
  _.map(document.getElementsByName('symbolcountDown'), element => {
    symbols.push(element.id)
  })
  let para = {
    color: color,
    markertype: markertype
  }
  symbols.forEach(function(element) {
    document.getElementById(element).remove()
  }, this)
  if (array !== undefined && array.length > 0) {
    if (type !== undefined) {
      array.forEach(function(element1) {
        if (element1 !== undefined) {
          element1.forEach(function(element) {
            if (element.type === 'countDown' && (element.fill !== '#BBBBBB' || color !== undefined)) { // 倒计时
              SvgMake.countDown(element, mysvg, para)
            } else if (element.id.indexOf('pedestrianLampPic') >= 0 && (element.stroke !== '#BBBBBB' || color !== undefined)) { // 人行灯 图
              SvgMake.pedestrianLampPic(element, mysvg, para)
            } else if (element.id.indexOf('arrowLight') >= 0 && (element.fill !== '#BBBBBB' || color !== undefined)) { // 箭头灯
              SvgMake.arrowLight(element, mysvg, para)
            } else if (element.type === 'lamps' && (element.fill !== '#BBBBBB' || color !== undefined)) { // 圆灯
              SvgMake.lamps(element, mysvg, para)
            } else if (element.type === 'wheelArrow' && (element.stroke !== '#BBBBBB' || color !== undefined)) { // 转弯箭头
              SvgMake.wheelArrow(element, mysvg, para)
            } else if (element.type === 'arrowStraight' && (element.stroke !== '#BBBBBB' || color !== undefined)) { // 直线箭头
              SvgMake.arrowStraight(element, mysvg, para)
            } else if (element.type === 'uturnArrow' && (element.stroke !== '#BBBBBB' || color !== undefined)) { // Uturn 箭头
              SvgMake.uturnArrow(element, mysvg, para)
            } else if (element.type === 'pedestrianLampArrow' && (element.stroke !== '#BBBBBB' || color !== undefined)) {
              SvgMake.pedestrianLampArrow(element, mysvg, para)
            }
          }, this)
        }
      }, this)
    } else {
      array.forEach(function(element) {
        if (element.type === 'countDown' && (element.fill !== '#BBBBBB' || color !== undefined)) { // 倒计时
          SvgMake.countDown(element, mysvg, para)
        } else if (element.id.indexOf('pedestrianLampPic') >= 0 && (element.stroke !== '#BBBBBB' || color !== undefined)) { // 人行灯 图
          SvgMake.pedestrianLampPic(element, mysvg, para)
        } else if (element.id.indexOf('arrowLight') >= 0 && (element.fill !== '#BBBBBB' || color !== undefined)) { // 箭头灯
          SvgMake.arrowLight(element, mysvg, para)
        } else if (element.type === 'lamps' && (element.stroke !== '#BBBBBB' || color !== undefined)) { // 圆灯
          SvgMake.lamps(element, mysvg, para)
        } else if (element.type === 'wheelArrow' && (element.stroke !== '#BBBBBB' || color !== undefined)) { // 转弯箭头
          SvgMake.wheelArrow(element, mysvg, para)
        } else if (element.type === 'arrowStraight' && (element.stroke !== '#BBBBBB' || color !== undefined)) { // 直线箭头
          SvgMake.arrowStraight(element, mysvg, para)
        } else if (element.type === 'uturnArrow' && (element.stroke !== '#BBBBBB' || color !== undefined)) { // Uturn 箭头
          SvgMake.uturnArrow(element, mysvg, para)
        } else if (element.type === 'pedestrianLampArrow' && (element.stroke !== '#BBBBBB' || color !== undefined)) {
          SvgMake.pedestrianLampArrow(element, mysvg, para)
        }
      }, this)
    }
  }
}
/**
 * 画SVG 图形
 */
export function drawShapes (id, map, websocket) {
  var mysvg = document.getElementById(id)
  if (mysvg === null) {
    if (websocket !== undefined) {
      websocket.close()
    }
    return
  }
  mysvg.innerHTML = ''
  if (map.routeLine.length > 0) { // 线， 虚线
    map.routeLine.forEach(function (lineMap) {
      SvgMake.line(lineMap, mysvg, {})
    }, this)
  }
  if (map.routeBight.length > 0) { // 曲线， 虚曲线
    map.routeBight.forEach(function (bightMap) {
      SvgMake.bight(bightMap, mysvg, {})
    }, this)
  }
  if (map.routeString.length > 0) { // 字符串
    map.routeString.forEach(function (stringMap) {
      SvgMake.string(stringMap, mysvg, {})
    }, this)
  }
  if (map.routeCrossWalk.length > 0) { // 人行横道
    map.routeCrossWalk.forEach(function (crossWalkMap) {
      SvgMake.crossWalk(crossWalkMap, mysvg, {})
    }, this)
  }
  if (map.routeTriangle.length > 0) { // 三角形
    map.routeTriangle.forEach(function (triangleMap) {
      SvgMake.triangle(triangleMap, mysvg, {})
    }, this)
  }
  if (map.routeArrowStraight.length > 0) { // 直行箭头
    map.routeArrowStraight.forEach(function (arrowStraightMap) {
      SvgMake.arrowStraight(arrowStraightMap, mysvg, {})
    }, this)
  }
  if (map.routeWheelArrow.length > 0) { // 转弯箭头
    map.routeWheelArrow.forEach(function (wheelArrowMap) {
      SvgMake.wheelArrow(wheelArrowMap, mysvg, {})
    }, this)
  }
  if (map.routeUturnArrow.length > 0) { // 调头箭头
    map.routeUturnArrow.forEach(function (uturnArrowMap) {
      SvgMake.uturnArrow(uturnArrowMap, mysvg, {})
    }, this)
  }
  if (map.routePedestrianLampArrow.length > 0) { // 人形箭头
    map.routePedestrianLampArrow.forEach(function (pedestrianLampArrowMap) {
      SvgMake.pedestrianLampArrow(pedestrianLampArrowMap, mysvg, {})
    }, this)
  }
}
/**
 * 查询 图形
 */
export function queryShapes (crossId, type) {
  return new Promise((resolve, reject) => {
    var routeLine = []
    var routeBight = []
    var routeString = []
    var routeCrossWalk = []
    var routeTriangle = []
    var routeArrowStraight = []
    var routeWheelArrow = []
    var routeUturnArrow = []
    var routePedestrianLampArrow = []
    var routePedestrianLampPic = []
    var routeVideo = []
    var routeLamps = []
    var routeArrowLight = []
    var routeDetector = []
    var routeCountDown = []
    var routeSpeed = []
    var routeFlow = []
    var routeQueueLength = []
    var picCount = 0
    var list = crossId
    if (type !== undefined) {
      list = crossId + ';' + type
    }
    Intersection.queryShapeByCrossId(list).then((value) => {
      value = value.data.results
      if (value === undefined) return
      value.forEach(function (element) {
        if (element.type === 'line' || element.type === 'imaginaryLine') {
          picCount += 1
          routeLine.push(svgRouteMake.line(element, {count: picCount}))
        }
        if (element.type === 'bight' || element.type === 'imaginaryBight') {
          picCount += 1
          routeBight.push(svgRouteMake.bight(element, {count: picCount}))
        }
        if (element.type === 'string') {
          picCount += 1
          routeString.push(svgRouteMake.string(element, {count: picCount}))
        }
        if (element.type === 'crossWalk') {
          picCount += 1
          routeCrossWalk.push(svgRouteMake.crossWalk(element, {count: picCount}))
        }
        if (element.type === 'flow') {
          picCount += 1
          routeFlow.push(svgRouteMake.flow(element, {count: picCount}))
        }
        if (element.type === 'triangle') {
          picCount += 1
          routeTriangle.push(svgRouteMake.triangle(element, {count: picCount}))
        }
        if (element.type === 'arrowStraight') {
          picCount += 1
          routeArrowStraight.push(svgRouteMake.arrowStraight(element, {count: picCount}))
        }
        if (element.type === 'wheelArrow') {
          picCount += 1
          routeWheelArrow.push(svgRouteMake.wheelArrow(element, {count: picCount}))
        }
        if (element.type === 'uturnArrow') {
          picCount += 1
          routeUturnArrow.push(svgRouteMake.uturnArrow(element, {count: picCount}))
        }
        if (element.type === 'pedestrianLampArrow') {
          picCount += 1
          routePedestrianLampArrow.push(svgRouteMake.pedestrianLampArrow(element, {count: picCount}))
        }
        if (element.type === 'video') {
          picCount += 1
          routeVideo.push(svgRouteMake.video(element, {count: picCount}))
        }
        if (element.type === 'pedestrianLampPic') {
          picCount += 1
          routePedestrianLampPic.push(svgRouteMake.pedestrianLampPic(element, {count: picCount}))
        }
        if (element.type === 'lamps') {
          picCount += 1
          routeLamps.push(svgRouteMake.lamps(element, {count: picCount}))
        }
        if (element.type === 'arrowLight') {
          picCount += 1
          routeArrowLight.push(svgRouteMake.arrowLight(element, {count: picCount}))
        }
        if (element.type === 'countDown') {
          picCount += 1
          routeCountDown.push(svgRouteMake.countDown(element, {count: picCount}))
        }
        if (element.type === 'detector') {
          picCount += 1
          routeDetector.push(svgRouteMake.detector(element, {count: picCount}))
        }
        if (element.type === 'speed') {
          picCount += 1
          routeSpeed.push(svgRouteMake.speed(element, {count: picCount}))
        }
        if (element.type === 'queueLength') {
          picCount += 1
          routeQueueLength.push(svgRouteMake.queueLength(element, {count: picCount}))
        }
      }, this)
      resolve({'tag': value[0].tag, 'routeLine': routeLine, 'routeBight': routeBight, 'routeString': routeString, 'routeCrossWalk': routeCrossWalk, 'routeTriangle': routeTriangle, 'routeArrowStraight': routeArrowStraight, 'routeWheelArrow': routeWheelArrow, 'routeUturnArrow': routeUturnArrow, 'routePedestrianLampArrow': routePedestrianLampArrow, 'routePedestrianLampPic': routePedestrianLampPic, 'routeLamps': routeLamps, 'routeArrowLight': routeArrowLight, 'routeCountDown': routeCountDown, 'routeDetector': routeDetector, 'routeVideo': routeVideo, 'routeSpeed': routeSpeed, 'routeFlow': routeFlow, 'routeQueueLength': routeQueueLength, 'picCount': picCount})
    })
  })
}
/**
 *  变颜色
 */
export function changeColor (sig, shapeMap, colorMap, svgId) {
  var colr = ''
  for (var key in sig.lampStatusMap) {
    if (shapeMap[key] !== undefined) {
      colr = colorMap[sig.lampStatusMap[key]]
      if (key === '13' || key === '14' || key === '15' || key === '16' || key === '21' || key === '22' || key === '23' || key === '24') {
        if (sig.lampStatusMap[key] === 2) {
          colr = 'GREEN'
        }
      }
      shapeMap[key].forEach(function(element) {
        if (element.type === 'lamps' || element.id.indexOf('arrowLight') >= 0 || element.id.indexOf('countDown') >= 0) {
          element.fill = colr
        } else if (element.id.indexOf('pedestrianLampPic') >= 0) {
          element['stroke'] = colr
        } else {
          element.stroke = colr
        }
      }, this)
    }
  }
  this.drawShapesFromArray(svgId, shapeMap, undefined, undefined, 'changeColor')
}

/**
 *  变颜色 特勤
 */
export function changeColorForSpecialPlan (sig, shapeMap, colorMap, svgId, websocket, worktype, stateBtn, implementBtn, _this) {
  var colr = ''
  if (sig.crossId !== undefined) {
    if (sig.type === 9 || sig.type === 10) {
      for (let key in sig.lampStatus) {
        colr = colorMap[sig.lampStatus[Number(key)]]
        if (key === '13' || key === '14' || key === '15' || key === '16' || key === '21' || key === '22' || key === '23' || key === '24') {
          if (sig.lampStatus[key] === 2) {
            colr = 'GREEN'
          }
        }
        if (shapeMap[sig.crossId][Number(key)] !== undefined) {
          shapeMap[sig.crossId][Number(key)].forEach(function(element) {
            if (element.type === 'lamps' || element.id.indexOf('arrowLight') >= 0 || element.id.indexOf('countDown') >= 0) {
              element.fill = colr
            } else if (element.id.indexOf('pedestrianLampPic') >= 0) {
              element['stroke'] = colr
            } else {
              element.stroke = colr
            }
          }, this)
        }
      }
    } else if (sig.type === null || sig.type === undefined) {
      for (let key in sig.lampStatusMap) {
        colr = colorMap[sig.lampStatusMap[Number(key)]]
        if (key === '13' || key === '14' || key === '15' || key === '16' || key === '21' || key === '22' || key === '23' || key === '24') {
          if (sig.lampStatusMap[key] === 2) {
            colr = 'GREEN'
          }
        }
        if (shapeMap[sig.crossId] !== undefined) {
          if (shapeMap[sig.crossId][Number(key)] !== undefined) {
            shapeMap[sig.crossId][Number(key)].forEach(function(element) {
              if (element.type === 'lamps' || element.id.indexOf('arrowLight') >= 0 || element.id.indexOf('countDown') >= 0) {
                element.fill = colr
              } else if (element.id.indexOf('pedestrianLampPic') >= 0) {
                element['stroke'] = colr
              } else {
                element.stroke = colr
              }
            }, this)
          }
        }
      }
    }
    svgId.forEach(function(sid) {
      if (sid.indexOf(sig.crossId) > 0) {
        this.drawShapesFromArray(sid, shapeMap[sig.crossId], undefined, websocket, 'specialplan')
        if (sig.controlStrage !== undefined) {
          worktype.forEach(function(element, index) {
            if (element.indexOf(sig.crossId) > 0) {
              if (document.getElementById(element) !== null && document.getElementById(element) !== undefined) {
                document.getElementById(element).innerHTML = sig.controlStrage // 工作方式
              }
              var crossId = sig.crossId
              if (sig.controlStrage === '特勤控制') {
                document.getElementById(`stateTimetq${sig.crossId}`).style.color = 'red'
                if (_this.scavengingTime[index] > 0) {
                  clearInterval(_this.scavengingTime[index])
                  _this.scavengingTime[index] = 0
                }
                stateBtn.splice(index, 1, true)
                _this.btnStatus[index] = true
                implementBtn[index] = '执行中'
                setTimeout(() => {
                  specialPlanTool.queryVipTaskTimes(_this.scavengingTime[index], crossId, 'specialTime' + crossId).then((val) => {
                    _this.scavengingTime[index] = val
                  })
                }, 200)
              } else if (sig.controlStrage === '时间表' && _this.wsData !== null) {
                _this.centerLock = false
                document.getElementById(`stateTimetq${sig.crossId}`).style.color = 'white'
                var endData = {
                  crossId: crossId
                }
                specialPlan.delVipTaskTime(endData).then((value) => {
                  if (_this.scavengingTime[index] > 0) {
                    clearInterval(_this.scavengingTime[index])
                    _this.scavengingTime[index] = 0
                  }
                  document.getElementById('specialTime' + crossId).innerHTML = ''
                })
                _this.btnStatus[index] = false
                stateBtn.splice(index, 1, false)
                implementBtn[index] = '执行'
              } else if (sig.controlStrage === '中心手动') {
                if (_this.scavengingTime[index] > 0) {
                  clearInterval(_this.scavengingTime[index])
                  _this.scavengingTime[index] = 0
                }
                document.getElementById(`stateTimetq${sig.crossId}`).style.color = 'red'
                _this.btnStatus[index] = true
                stateBtn.splice(index, 1, true)
                implementBtn[index] = '执行中'
                if (_this.scavengingTime[index] === 0) {
                  setTimeout(() => {
                    specialPlanTool.queryVipTaskTimes(_this.scavengingTime[index], crossId, `specialTime${crossId}`).then((val) => {
                      _this.scavengingTime[index] = val
                    })
                  }, 1000)
                }
              }
            }
          }, this)
        }
      }
    }, this)
  }
}
/**
 *  变颜色 首页特勤
 */
export function changeColorWelcome (sig, worktype, _this) {
  if (sig.crossId !== undefined) {
    if (sig.controlStrage !== undefined) {
      _this.workMsg = sig.controlStrage // 工作方式
      let crossId = sig.crossId
      if (sig.controlStrage === '特勤控制') {
        _this.deviceInfo.operateMode = '特勤控制'
        _this.specialBtn = false
        _this.changeControl = true
        clearInterval(_this.svgInterval)
        document.getElementById(`stateColor${crossId}`).style.color = 'red'
        _this.implementButtonStates = false
        if (_this.scavengingTime > 0) {
          clearInterval(_this.scavengingTime)
          _this.scavengingTime = 0
        }
        let data = {
          areaVipPlanId: 0,
          crossId: crossId,
          startTime: new Date(),
          type: 0
        }
        specialPlanTool.addVipTaskTime(data)
        specialPlanTool.queryVipTaskTimes(_this.scavengingTime, crossId, `specialTime${crossId}`).then((val) => {
          _this.scavengingTime = val
        })
      } else if (sig.controlStrage === '时间表') {
        sessionStorage.setItem('phaseLock', `PLno${crossId}`)
        clearInterval(_this.nextsTime)
        _this.changeControl = true
        _this.controllerState = true
        document.getElementById(`stateColor${crossId}`).style.color = 'white'
        if (document.getElementById(`specialTime${crossId}`) !== null) {
          document.getElementById(`specialTime${crossId}`).innerHTML = ''
        }
        _this.centerLock = false
        _this.specialBtn = true
        _this.deviceInfo.operateMode = '时间表'
        var endData = {
          crossId: crossId
        }
        specialPlan.delVipTaskTime(endData).then((value) => {
          clearInterval(_this.scavengingTime)
          _this.scavengingTime = 0
          document.getElementById(`specialTime${crossId}`).innerHTML = ''
        })
        if (_this.siglab === 8) {
          _this.centerLockStart = true
        } else {
          _this.homeDis = false
          _this.centerLockStart = false
        }
        _this.implementButtonStates = true
      } else if (sig.controlStrage === '中心手动') {
        _this.deviceInfo.operateMode = '中心手动'
        _this.centerLock = true
        _this.controllerState = false
        _this.changeControl = false
        _this.implementButtonStates = false
        document.getElementById(`stateColor${crossId}`).style.color = 'red'
        var startTimeData = new Date()
        var data = {
          areaVipPlanId: 0,
          crossId: crossId,
          startTime: startTimeData,
          type: 0
        }
        specialPlan.addVipTaskTime(data)
        // if (_this.scavengingTime > 0) {
        //   clearInterval(_this.scavengingTime)
        //   _this.scavengingTime = 0
        // }
        if (_this.deviceInfo.operateMode === '中心手动') {
          setTimeout(() => {
            specialPlanTool.queryVipTaskTimes(_this.scavengingTime, crossId, `specialTime${crossId}`).then((val) => {
              _this.scavengingTime = val
            })
          }, 1000)
        }
      }
    }
  }
}

/**
 *  变颜色 首页特勤GB20999
 */
export function changeColorWelcomeGB (sig, shapeMap, colorMap, svgId, websocket, worktype, homeDis, _this) {
  if (sig === undefined) return
  if (sig.jrStep !== undefined) {
    clearInterval(_this.intervalGB)
    _this.dataGB = sig.jrStep
    // let crossId = sig.crossId
    document.getElementById(worktype).innerHTML = sig.jrStep.controlModeStr
    // if (sig.jrStep.controlModeStr === '特勤控制') {
    //   var data = {
    //     areaVipPlanId: 0,
    //     crossId: sig.crossId,
    //     startTime: new Date(),
    //     type: 0
    //   }
    //   specialPlanTool.addVipTaskTime(data)
    //   specialPlanTool.queryVipTaskTimes(_this.scavengingTime, crossId, 'specialTime' + crossId).then((val) => {
    //     _this.scavengingTime = val
    //   })
    // }
    _this.stepCountGB = sig.jrStep.stepTime
    if (_this.stepCountGB > 0) {
      _this.intervalGB = setInterval(function() {
        _this.stepCountGB --
        if (_this.stepCountGB <= 0) {
          clearInterval(_this.intervalGB)
        }
      }, 1000)
    }
  }
  if (sig.lampStatus !== undefined) {
    var colr = ''
    for (var key in sig.lampStatus) {
      colr = colorMap[sig.lampStatus[Number(key)]]
      if (key === '13' || key === '14' || key === '15' || key === '16' || key === '21' || key === '22' || key === '23' || key === '24') {
        if (sig.lampStatus[key] === 2) {
          colr = 'GREEN'
        }
      }
      if (shapeMap[key] !== undefined) {
        shapeMap[key].forEach(function(element) {
          if (element.type === 'lamps' || element.id.indexOf('arrowLight') >= 0 || element.id.indexOf('countDown') >= 0) {
            element.fill = colr
          } else if (element.id.indexOf('pedestrianLampPic') >= 0) {
            element['stroke'] = colr
          } else {
            element.stroke = colr
          }
        }, this)
      }
    }
    this.drawShapesFromArray(svgId, shapeMap, undefined, websocket, 'changeColor')
  }
}

/**
 *  变颜色  区域监视
 */
export function changeColorForAreaMonitor (sig, shapeMap, colorMap, svgId, websocket, worktype, devPositions, _this) {
  var colr = ''
  if (sig.crossId !== undefined) {
    if (sig.type === 9 || sig.type === 10) {
      let crossId = sig.crossId
      for (let key in sig.lampStatus) {
        colr = colorMap[sig.lampStatus[Number(key)]]
        if (key === '13' || key === '14' || key === '15' || key === '16' || key === '21' || key === '22' || key === '23' || key === '24') {
          if (sig.lampStatus[key] === 2) {
            colr = 'GREEN'
          }
        }
        if (shapeMap[crossId][Number(key)] !== undefined) {
          shapeMap[crossId][Number(key)].forEach(function(element) {
            if (element.type === 'lamps' || element.id.indexOf('arrowLight') >= 0 || element.id.indexOf('countDown') >= 0) {
              element.fill = colr
            } else if (element.id.indexOf('pedestrianLampPic') >= 0) {
              element['stroke'] = colr
            } else {
              element.stroke = colr
            }
          }, this)
        }
      }
    } else if (sig.type === undefined || sig === null) {
      let crossId = sig.crossId
      for (let key in sig.lampStatusMap) {
        colr = colorMap[sig.lampStatusMap[Number(key)]]
        if (key === '13' || key === '14' || key === '15' || key === '16' || key === '21' || key === '22' || key === '23' || key === '24') {
          if (sig.lampStatusMap[key] === 2) {
            colr = 'GREEN'
          }
        }
        if (shapeMap[crossId] !== undefined) {
          if (shapeMap[crossId][Number(key)] !== undefined) {
            shapeMap[crossId][Number(key)].forEach(function(element) {
              if (element.type === 'lamps' || element.id.indexOf('arrowLight') >= 0 || element.id.indexOf('countDown') >= 0) {
                element.fill = colr
              } else if (element.id.indexOf('pedestrianLampPic') >= 0) {
                element['stroke'] = colr
              } else {
                element.stroke = colr
              }
            }, this)
          }
        }
      }
    }
    let crossId = sig.crossId
    for (var key in sig.lampStatusMap) {
      colr = colorMap[sig.lampStatusMap[Number(key)]]
      if (key === '13' || key === '14' || key === '15' || key === '16' || key === '21' || key === '22' || key === '23' || key === '24') {
        if (sig.lampStatusMap[key] === 2) {
          colr = 'GREEN'
        }
      }
      if (shapeMap[crossId][Number(key)] !== undefined) {
        shapeMap[crossId][Number(key)].forEach(function(element) {
          if (element.type === 'lamps' || element.id.indexOf('arrowLight') >= 0 || element.id.indexOf('countDown') >= 0) {
            element.fill = colr
          } else if (element.id.indexOf('pedestrianLampPic') >= 0) {
            element['stroke'] = colr
          } else {
            element.stroke = colr
          }
        }, this)
      }
    }
    svgId.forEach(function(sid) {
      const devPos = devPositions.find((val) => val.crossId === crossId)
      const devIndex = devPositions.findIndex((val) => val.crossId === crossId)
      const devNo = devPos.no
      if (devPos !== undefined && sid.indexOf(devNo) > 0) {
        this.drawShapesFromArray(sid, shapeMap[crossId], undefined, websocket, 'areamonitor')
        if (sig.controlStrage !== undefined && sig.controlStrage !== '') {
          devPositions[devIndex].deviceInfo.operateMode = sig.controlStrage
          if (sig.controlStrage === '特勤控制') {
            document.getElementById('countDownDiv' + devIndex).style.display = 'none'
            if (_this.scavengingTime[devIndex] > 0) {
              clearInterval(_this.scavengingTime[devIndex])
              _this.scavengingTime[devIndex] = 0
            }
            specialPlanTool.queryVipTaskTimes(_this.scavengingTime[devIndex], crossId, 'specialTime' + crossId).then((val) => {
              _this.scavengingTime[devIndex] = val
              if (val > 0) {
                _this.regionBtnStatus[devIndex] = true
                _this.implementButtonStates[devIndex] = false
              }
            })
          } else if (sig.controlStrage === '时间表') {
            document.getElementById('countDownDiv' + devIndex).style.display = 'unset'
            _this.regionBtnStatus[devIndex] = false
            _this.devPositions[devIndex].centerLock = false
            _this.devPositions[devIndex].centerLockStart = false
            var endData = {
              crossId: crossId
            }
            if (_this.scavengingTime[devIndex] > 0) {
              specialPlan.delVipTaskTime(endData).then((value) => {
                if (value.data.success) {
                  clearInterval(_this.scavengingTime[devIndex])
                  _this.scavengingTime[devIndex] = 0
                  document.getElementById('specialTime' + crossId).innerHTML = ''
                }
              })
            }
            _this.implementButtonStates[devIndex] = true
          } else if (sig.controlStrage === '中心手动') {
            if (_this.scavengingTime[devIndex] > 0) {
              clearInterval(_this.scavengingTime[devIndex])
              _this.scavengingTime[devIndex] = 0
            }
            if (_this.scavengingTime[devIndex] === 0) {
              setTimeout(() => {
                specialPlanTool.queryVipTaskTimes(_this.scavengingTime[devIndex], crossId, 'specialTime' + crossId).then((val) => {
                  _this.scavengingTime[devIndex] = val
                  if (val > 0) {
                    _this.devPositions[devIndex].centerLock = true
                    _this.devPositions[devIndex].centerLockStart = true
                    _this.implementButtonStates[devIndex] = false
                    document.getElementById('countDownDiv' + devIndex).style.display = 'none'
                  }
                })
              }, 2000)
            }
          }
        }
      }
    }, this)
  }
}

export default {
  drawShapes,
  queryShapes,
  drawShapesFromArray,
  changeColor,
  changeColorForSpecialPlan,
  changeColorForAreaMonitor,
  changeColorWelcome,
  changeColorWelcomeGB
}
