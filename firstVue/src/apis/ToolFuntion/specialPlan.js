import specialPlan from '@/apis/Plan/specialPlan.js'
export function defaultInOut(LockingMEnter) {
  if (LockingMEnter === '0') {
    LockingMEnter = '4'
  } else if (LockingMEnter === '2') {
    LockingMEnter = '6'
  } else if (LockingMEnter === '4') {
    LockingMEnter = '0'
  } else if (LockingMEnter === '6') {
    LockingMEnter = '2'
  }
  return parseInt(LockingMEnter)
}
export function startVipTask (data) {
  const { crossId, LockingMethodTimes, LockingMEnter, LockingMExit } = data
  let startHour = 0
  let startMinute = 0
  let endHour = 0
  let endMinute = 0
  if (LockingMethodTimes !== undefined && LockingMethodTimes !== '') {
    startHour = LockingMethodTimes[0].getHours()
    startMinute = LockingMethodTimes[0].getMinutes()
    endHour = LockingMethodTimes[1].getHours()
    endMinute = LockingMethodTimes[1].getMinutes()
  }
  let inOutDirect = this.defaultInOut(LockingMEnter)
  let startField = {
    crossId,
    inDirect: inOutDirect,
    outDirect: parseInt(LockingMExit),
    sequenceId: 1,
    distance: 0,
    speed: 0,
    startHour,
    startMinute,
    endHour,
    endMinute
  }
  return new Promise((resolve, reject) => {
    specialPlan.startVipTask(startField).then((value) => {
      resolve(value)
    })
  })
}
export function queryVipTaskTimes (scavengingTime, crossId, elementId) {
  return new Promise((resolve, reject) => {
    specialPlan.queryVipTaskTime({crossId: crossId}).then((value) => {
      value = value.data.results
      console.log(value)
      if (value.length > 0) {
        let valueTime = value[0].startTimeSec
        scavengingTime = this.startInterval(scavengingTime, valueTime, elementId)
      }
      resolve(scavengingTime)
    })
  })
}
export function addVipTaskTime (data) {
  return new Promise((resolve, reject) => {
    specialPlan.addVipTaskTime(data).then((value) => {
      resolve(value.data.success)
    })
  })
}
export function startInterval (scavengingTime, startTime, elementId) {
  startTime = Number(startTime)
  let d = Math.floor(startTime / (3600 * 24))
  let h = d > 0 ? Math.floor((startTime - (d * 3600 * 24)) / 3600) : Math.floor(startTime / 3600)
  let m = 0
  if (d > 0) {
    m = h > 0 ? Math.floor((startTime - (d * 3600 * 24 + h * 3600)) / 60) : Math.floor((startTime - (d * 3600 * 24)) / 60)
  } else {
    m = h > 0 ? Math.floor((startTime - (h * 3600)) / 60) : Math.floor(startTime / 60)
  }
  let s = startTime % 60
  scavengingTime = setInterval(function () {
    s++
    if (s > 59) {
      ++m
      s = 0
    }
    if (m > 59) {
      ++h
      m = 0
    }
    if (h > 23) {
      ++d
      h = 0
    }
    let time = (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s)
    if (document.getElementById(elementId) !== null && document.getElementById(elementId) !== undefined) {
      document.getElementById(elementId).innerHTML = d > 0 ? d + '天 ' + time : time
    }
  }, 1000)
  return scavengingTime
}
export default {
  startVipTask,
  queryVipTaskTimes,
  defaultInOut,
  addVipTaskTime,
  startInterval
}
