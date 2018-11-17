// var config = require('@/../config')
// import { getEnv } from '@/utils/zPreface'
// const url = getEnv('WEB_SOCKET_URI')
// var url = config.dev.proxyTable['/WebSocket']
const url = 'ws://192.168.20.220:8888'
import SVG from '@/apis/ToolFuntion/Svg'
import { Notification } from 'element-ui'

/**
 * 首页状态监视 链接Socket
 */
export function connectSocketWelcome(crossId, dataReceived, workMsg, _this) {
  let ws = null
  return new Promise((resolve, reject) => {
    if (ws !== null && ws !== undefined) {
      ws.close()
      ws = undefined
    }
    ws = new WebSocket(url)
    // 当websocket创建成功时，即会触发onopen事件
    ws.onopen = () => {
      ws.send(crossId + ';' + 'signal')
    }
    ws.onmessage = (evt) => {
      if (evt.data.indexOf('未被消息服务器推送') > 0) {
        Notification.info({
          title: '消息',
          message: evt.data,
          duration: 5000
        })
        ws.close()
      } else {
        if (evt.data !== 'number') {
          clearInterval(_this.svgIntervalb)
        }
        dataReceived(JSON.parse(evt.data))
        SVG.changeColorWelcome(JSON.parse(evt.data), workMsg, _this)
      }
      resolve(ws)
    }
  })
}

/**
 * 路口监视状态 链接Socket
 */
export function connectSocketLukouMonitor(crossId, ws, _this) {
  return new Promise((resolve, reject) => {
    if (ws !== undefined && ws !== null) {
      ws.close()
    }
    ws = new WebSocket(url)
    if (crossId !== undefined) {
      // 当websocket创建成功时，即会触发onopen事件
      ws.onopen = function() {
        ws.send(crossId + ';' + 'signal')
      }
      // 当客户端收到服务端发来的消息时，会触发onmessage事件，参数evt.data中包含server传输过来的数据
      ws.onmessage = function(evt) {
        _this.changeColor(JSON.parse(evt.data), _this, ws)
      }
      // 当客户端收到服务端发送的关闭连接的请求时，触发onclose事件
      ws.onclose = function(evt) {
      }
      // 如果出现连接，处理，接收，发送数据失败的时候就会触发onerror事件
      ws.onerror = function(evt) {
      }
      resolve(ws)
    }
  })
}

export default {
  connectSocketWelcome,
  connectSocketLukouMonitor
}
