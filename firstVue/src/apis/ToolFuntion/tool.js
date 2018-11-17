/**
 * Date Format
 * formatDate(new Date(timestamp), 'yyyy-MM-dd hh:mm:ss')
 */
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str))
    }
  }
  return fmt
}
/**
 * Date Format
 * Sun Apr 29 2018 11:16:00 GMT+0800 (中国标准时间)
 * formatDate(new Date(timestamp), 'yyyy-MM-dd hh:mm:ss')
 */
export function getUMdhms (date, H) {
  if (H === undefined) H = 0
  let dataStr = this.formatDate(date, 'yyyy-MM-dd hh:mm:ss')
  let ymd = dataStr.split(' ')[0]
  let hms = dataStr.split(' ')[1]
  let hour = Number(hms.split(':')[0]) + H
  if (hour < 0) {
    hour = 24 + hour
  } else if (hour > 24) {
    hour = hour - 24
  }
  return new Date(ymd.split('-')[0], ymd.split('-')[1], ymd.split('-')[2], hour, hms.split(':')[1], hms.split(':')[2])
}
export function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

/**
 * 查 数组里是否包含此元素 -1：没有  大于等于0： 有
 * @param {*} search 要查询的元素
 * @param {*} array 数组
 */
export function inArray(search, array) {
  // 查询数组里有没有包含数据
  for (var i in array) {
    if (array[i] === search) {
      return i
    }
  }
  return -1
}
export function inArrayToArray(search, array) {
  // 查询数组里有没有包含数据
  for (var i in array) {
    if (array[i].toString() === search.toString()) {
      return i
    }
  }
  return -1
}
/**
 * String 倒转
 */
export function stringReverseTool(str) {
  var result = ''
  for (var i = str.length; i > 0; i--) {
    result += str.charAt(i - 1)
  }
  return result
}

/**
 * 路段/路段故障检测器
 */
export function detectorStatsTool(value) {
  var array = value.toString(2).split('')
  var result = ''
  var index = 1
  array.forEach(function(element) {
    if (element === '1') {
      result = result + index + '/'
    }
    index = index + 1
  }, this)
  return result
}

/**
 * 16进制转RGB
 */
export function sexteenToRGB(value) {
  var sColor = value.toLowerCase()
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#'
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    var sColorChange = []
    for (var j = 1; j < 7; j += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(j, j + 2)))
    }
    return 'RGB(' + sColorChange.join(',') + ')'
  }
  return sColor
}
/**
 * RGB进制转16
 */
export function RGBTOSexteen(value) {
  var that = value
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 如果是rgb颜色表示
  if (/^(rgb|RGB)/.test(that)) {
    var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
    var strHex = '#'
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16)
      if (hex === '0') {
        hex += hex
      }
      strHex += hex
    }
    if (strHex.length !== 7) {
      strHex = that
    }
    return strHex
  } else if (reg.test(that)) {
    var aNum = that.replace(/#/, '').split('')
    if (aNum.length === 6) {
      return that
    } else if (aNum.length === 3) {
      var numHex = '#'
      for (var j = 0; j < aNum.length; j += 1) {
        numHex += (aNum[j] + aNum[j])
      }
      return numHex
    }
  }
  return that
}
/**
 * 相序添加0
 */
export function addZero (obj) {
  if (obj < 10 || obj === 'A' || obj === 'B' || obj === 'C' || obj === 'D' || obj === 'E' || obj === 'F' || obj === 'G' || obj === 'H' || obj === 'I' || obj === 'J' || obj === 'K' || obj === 'L' || obj === 'M' || obj === 'N' || obj === 'O' || obj === 'P' || obj === 'Q' || obj === 'R' || obj === 'S' || obj === 'T' || obj === 'U' || obj === 'V' || obj === 'W' || obj === 'X' || obj === 'Y' || obj === 'Z') {
    return '0' + obj
  } else {
    return obj
  }
}

/**
 * RGB进制转16
 */
export function changeCross(value, _this, type) {
  var crossId = ''
  if (_this.$router.currentRoute.query.crossId === undefined && _this.$store.state.crossId === undefined) {
    document.title = value
    if (type) {
      _this.$notify({
        title: '警告',
        message: '请选择路口',
        type: 'warning'
      })
    }
  } else {
    if (_this.$router.currentRoute.query.crossId === undefined) {
      crossId = _this.$store.state.crossId
    } else {
      crossId = _this.$router.currentRoute.query.crossId
      _this.$store.state.crossId = crossId
      _this.$store.state.crossName = _this.$router.currentRoute.query.crossName
    }
    if (_this.$store.state.crossName === undefined || _this.$store.state.crossName === null || !type) {
      document.title = value
    } else {
      document.title = value + ' - ' + _this.$store.state.crossName
    }
  }
  return crossId
}
/**
 * 十进制 转十六进制
 * @param {*} obj
 */
export function tenToSexTeen(obj) {
  obj = obj.toString(16).toUpperCase()
  if (obj < 10 || obj === 'A' || obj === 'B' || obj === 'C' || obj === 'D' || obj === 'E' || obj === 'F' || obj === 'G' || obj === 'H' || obj === 'I' || obj === 'J' || obj === 'K' || obj === 'L' || obj === 'M' || obj === 'N' || obj === 'O' || obj === 'P' || obj === 'Q' || obj === 'R' || obj === 'S' || obj === 'T' || obj === 'U' || obj === 'V' || obj === 'W' || obj === 'X' || obj === 'Y' || obj === 'Z') {
    return '0' + obj
  } else {
    return obj
  }
}

// 冒泡数组排序
export function sort(arr) {
  for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }
}
export function isEmptyObject(obj) {
  for (var key in obj) {
    return false
  }
  return true
}
export default {
  formatDate,
  padLeftZero,
  inArray,
  stringReverseTool,
  detectorStatsTool,
  RGBTOSexteen,
  sexteenToRGB,
  changeCross,
  addZero,
  tenToSexTeen,
  inArrayToArray,
  sort,
  getUMdhms,
  isEmptyObject
}
