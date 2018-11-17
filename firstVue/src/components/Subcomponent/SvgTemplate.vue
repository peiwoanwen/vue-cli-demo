<template>
  <div>
     <svg version="1.1" 
        xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMinYMin meet" viewBox="0,0,600,600">
        <defs id="devStatusSvgDef">  
          <marker :id="'markerArrowRED' + crossId"  markerWidth="13" markerHeight="13" refX="1" refY="1.5" orient="auto" >  
            <path d="M0,0 L0,6 L6,3 L0,0" style="fill: RED;" transform="scale(0.5)"/>  
          </marker>
          <marker :id="'markerArrowBackRED' + crossId"  markerWidth="13" markerHeight="13" refX="1" refY="1.5" orient="auto" >  
            <path d="M6,6 L6,0 L0,3 L6,6" style="fill: RED;" transform="scale(0.5)"/>  
          </marker> 
          <marker :id="'markerArrowYELLOW' + crossId"  markerWidth="13" markerHeight="13" refX="1" refY="1.5" orient="auto" >  
            <path d="M0,0 L0,6 L6,3 L0,0" style="fill: YELLOW;" transform="scale(0.5)"/>  
          </marker>
          <marker :id="'markerArrowBackYELLOW' + crossId"  markerWidth="13" markerHeight="13" refX="1" refY="1.5" orient="auto" >  
            <path d="M6,6 L6,0 L0,3 L6,6" style="fill: YELLOW;" transform="scale(0.5)"/>  
          </marker> 
          <marker :id="'markerArrowGREEN' + crossId"  markerWidth="13" markerHeight="13" refX="1" refY="1.5" orient="auto" >  
            <path d="M0,0 L0,6 L6,3 L0,0" style="fill: GREEN;" transform="scale(0.5)"/>  
          </marker>
          <marker :id="'markerArrowBackGREEN' + crossId"  markerWidth="13" markerHeight="13" refX="1" refY="1.5" orient="auto" >  
            <path d="M6,6 L6,0 L0,3 L6,6" style="fill: GREEN;" transform="scale(0.5)"/>  
          </marker> 
        </defs>
        <g :id="'devStatusSvg' + crossId">
        </g>
      </svg>
  </div>
</template>
<script>
import SVG from '@/apis/ToolFuntion/Svg'
// import webSocket from '@/apis/ToolFuntion/WebSocket'
// import _ from 'lodash'

const TEN = 10
const NINE = 9

export default {
  name: 'sctTemplateTest',
  props: {
    crossId: {
      type: [Number, String]
    },
    data: {
      type: Object
    },
    colorMap: {
      type: Array
    }
  },
  data () {
    return {
      shapeMap: [],
      ws: null,
      signal: ''
    }
  },
  methods: {
    changeColor(sig) { // 灯态修改
      const { colorMap, shapeMap } = this
      if (!shapeMap) return
      if (sig.type === TEN || sig.type === NINE) {
        this.signal = sig.lampStatus
      } else {
        this.signal = sig.lampStatusMap // 把推送到的数据赋值给signal
      }
      // this.signal = sig.lampStatusMap // 把推送到的数据赋值给signal
      let color = '' // 声明一个变量存储颜色
      for (let key in this.signal) { // 循环存储的数据
        if (key !== undefined && shapeMap[Number(key)] !== undefined) { // 防止报错
          color = colorMap[this.signal[key]]
          this.setShapeArrayColor(key, color)
          if (key === '13' || key === '14' || key === '15' || key === '16' || key === '21' || key === '22' || key === '23' || key === '24') {
            if (this.signal[key] === 2) { // 在这些方向为黄灯的时候变为绿灯
              color = 'GREEN'
            }
            this.setShapeArrayColor(key, color)
          }
        }
      }
    },
    setShapeArrayColor(key, color) { // 灯态颜色 改变
    // 循环key(当前方向的下标),给属性加上颜色(color)
      const { shapeMap } = this
      shapeMap[key].forEach(function(element) {
        // 当检测到有圆灯、箭头灯、倒计时的时候需要给fill属性加颜色
        if (element.type === 'lamps' || element.id.indexOf('arrowLight') >= 0 || element.id.indexOf('countDown') >= 0) {
          element.fill = color
        } else if (element.id.indexOf('pedestrianLampPic') >= 0) {
          element['stroke'] = color
        } else {
          element.stroke = color
        }
      }, this)
      SVG.drawShapesFromArray('devStatusSvg' + this.crossId, this.shapeMap, undefined, null, 'lukouqmonitor', this.crossId)
    }
  },
  watch: {
    data(newValue, oldValue) {
      this.changeColor(newValue)
    }
  },
  async mounted() {
    SVG.queryShapes(this.crossId).then((value) => {
      if (value.tag !== undefined && value.tag.length > 0) {
        this.tag = value.tag
      } else {
        this.tag = ''
      }
      value.routeCountDown.forEach((countDown) => { // 人行灯 图
        if (countDown.amphenolCon !== undefined) {
          if (this.shapeMap[countDown.amphenolCon] === undefined) {
            this.shapeMap[countDown.amphenolCon] = [countDown]
          } else {
            this.shapeMap[countDown.amphenolCon].push(countDown)
          }
        }
      })
      value.routePedestrianLampPic.forEach((pedestrianLampPic) => { // 人行灯 图
        if (pedestrianLampPic.amphenolCon !== undefined) {
          if (this.shapeMap[pedestrianLampPic.amphenolCon] === undefined) {
            this.shapeMap[pedestrianLampPic.amphenolCon] = [pedestrianLampPic]
          } else {
            this.shapeMap[pedestrianLampPic.amphenolCon].push(pedestrianLampPic)
          }
        }
      })
      value.routeArrowLight.forEach((arrowLight) => { // 箭头灯
        if (arrowLight.amphenolCon !== undefined) {
          if (this.shapeMap[arrowLight.amphenolCon] === undefined) {
            this.shapeMap[arrowLight.amphenolCon] = [arrowLight]
          } else {
            this.shapeMap[arrowLight.amphenolCon].push(arrowLight)
          }
        }
      })
      value.routeLamps.forEach((lamps) => { // 圆灯
        if (lamps.amphenolCon !== undefined) {
          if (this.shapeMap[lamps.amphenolCon] === undefined) {
            this.shapeMap[lamps.amphenolCon] = [lamps]
          } else {
            this.shapeMap[lamps.amphenolCon].push(lamps)
          }
        }
      })
      value.routeArrowStraight.forEach((arrowStraight) => { // 直箭头
        if (arrowStraight.amphenolCon !== undefined) {
          if (this.shapeMap[arrowStraight.amphenolCon] === undefined) {
            this.shapeMap[arrowStraight.amphenolCon] = [arrowStraight]
          } else {
            this.shapeMap[arrowStraight.amphenolCon].push(arrowStraight)
          }
        }
      })
      value.routePedestrianLampArrow.forEach((pedestrianLampArrow) => { // 人行箭头
        if (pedestrianLampArrow.amphenolCon !== undefined) {
          if (this.shapeMap[pedestrianLampArrow.amphenolCon] === undefined) {
            this.shapeMap[pedestrianLampArrow.amphenolCon] = [pedestrianLampArrow]
          } else {
            this.shapeMap[pedestrianLampArrow.amphenolCon].push(pedestrianLampArrow)
          }
        }
      })
      value.routeUturnArrow.forEach((uturnArrow) => { // U_turn 箭头
        if (uturnArrow.amphenolCon !== undefined) {
          if (this.shapeMap[uturnArrow.amphenolCon] === undefined) {
            this.shapeMap[uturnArrow.amphenolCon] = [uturnArrow]
          } else {
            this.shapeMap[uturnArrow.amphenolCon].push(uturnArrow)
          }
        }
      })
      value.routeWheelArrow.forEach((wheelArrow) => { // 转弯箭头
        if (wheelArrow.amphenolCon !== undefined) {
          if (this.shapeMap[wheelArrow.amphenolCon] === undefined) {
            this.shapeMap[wheelArrow.amphenolCon] = [wheelArrow]
          } else {
            this.shapeMap[wheelArrow.amphenolCon].push(wheelArrow)
          }
        }
      })
      SVG.drawShapesFromArray('devStatusSvg' + this.crossId, this.shapeMap, undefined, null, 'lukouqmonitor', this.crossId)
    })
  }
}
</script>
<style>
</style>