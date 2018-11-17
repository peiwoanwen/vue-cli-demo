export function setCookie (name, value) {
  if (this.getCookie(name) !== undefined) {
    this.delCookie(name)
  }
  var Days = 1
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}
export function getCookie (name) {
  return new Promise((resolve, reject) => {
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    var arr = document.cookie.match(reg)
    if (arr !== null) {
      resolve(unescape(arr[2]))
    } else {
      resolve(undefined)
    }
  })
}
export function delCookie (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval !== null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}
export default {
  setCookie,
  getCookie,
  delCookie
}
