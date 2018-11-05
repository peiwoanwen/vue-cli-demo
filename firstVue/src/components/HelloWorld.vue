<template>
  <div>
    <div id="js-container">
      <div class="btnDiv">
        <el-button @click="setOut(1)" size="mini" class="out" :class="{ bgColorOne: isA }">路线一</el-button>
        <el-button @click="setOut(2)" size="mini" class="out" :class="{ bgColorOne: isB }">路线二</el-button>
        <el-button @click="setOut(3)" size="mini" class="out" :class="{ bgColorOne: isC }">路线三</el-button>
      </div>
    </div>
    <div id="panel"></div>
  </div>
</template>
<script>
import remoteLoad from '@/utils/remoteLoad'
import { MapKey, MapCityName } from './../../config/config'
import interfaces from './../apis/GadMap/interface'
export default {
  data () {
    return {
      searchKey: '',
      placeSearch: null,
      dragStatus: false,
      AMapUI: null,
      AMap: null,
      map: null,
      isA: false,
      isB: false,
      isC: false,
      route: null,
      marker: null,
      latLogArr: [[114.444594, 23.088805], [114.429831, 23.090384], [114.393954, 23.090068]]
    }
  },
  methods: {
    // 实例化地图
    async initMap () {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      let AMapUI = this.AMapUI = window.AMapUI
      let AMap = this.AMap = window.AMap
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        let mapConfig = {
          zoom: 13,
          cityName: MapCityName,
          center: [114.444594, 23.088805]
        }
        this.map = this.marker = new AMap.Map('js-container', mapConfig)
        // 启用工具条
        AMap.plugin(['AMap.ToolBar'], function () {
          this.map.addControl(new AMap.ToolBar({
            position: 'RB'
          }))
        })
        // 创建地图拖拽
        let positionPicker = new PositionPicker({
          mode: 'dragMap', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
          map: this.map // 依赖地图对象
        })
        // 拖拽完成发送自定义 drag 事件
        positionPicker.on('success', positionResult => {
          // 过滤掉初始化地图后的第一次默认拖放
          if (!this.dragStatus) {
            this.dragStatus = true
          } else {
            this.$emit('drag', positionResult)
          }
        })
        // 启动拖放
        positionPicker.start()
        // 地图信号机图标展示
        for (let i = 0, size = this.latLogArr.length; i < size; i++) {
          console.log(this.latLogArr[i])
          this.marker = new AMap.Marker({
            icon: './../../static/device_online.png',
            position: this.latLogArr[i],
            offset: new AMap.Pixel(-13, -30)
          })
          this.marker.setMap(this.map)
        }
      })
      let statu = await interfaces.status({})
      let dto = await interfaces.loginDo({userName: 'admin', passWord: 'zhzx1234'})
      console.log(statu)
      console.log('do')
      console.log(dto)
    },
    trajectory (x, l, y, t, n) {
      var driving = new this.AMap.Driving({
        map: this.map,
        panel: 'panel'
      })
      // 根据起终点经纬度规划驾车导航路线
      driving.search(new this.AMap.LngLat(x, l), new this.AMap.LngLat(y, t), function (status, result) {
        // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
          console.log('绘制驾车路线完成')
        } else {
          console.log('获取驾车数据失败：' + result)
        }
      })
    },
    setOut (num) {
      if (num === 1) {
        interfaces.queryControllerHasGis({}).then((value) => {
          console.log(value)
        })
        console.log(1)
        this.isA = true
        this.isB = false
        this.isC = false
        this.trajectory(116.379028, 39.865042, 116.427281, 39.903719, num)
      } else if (num === 2) {
        console.log(2)
        this.isA = false
        this.isB = true
        this.isC = false
        this.trajectory(114.418893, 23.102522, 114.41649, 23.06857, num)
      } else if (num === 3) {
        console.log(3)
        this.isA = false
        this.isB = false
        this.isC = true
        this.trajectory(114.393659, 23.090679, 114.518113, 23.071571, num)
      }
    }
  },
  mounted () {
  },
  async created () {
    if (window.AMap && window.AMapUI) {
      console.log('1234567')
      this.initMap()
    } else {
      console.log('adjahdj')
      await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`)
      await remoteLoad(`https://webapi.amap.com/maps?v=1.4.10&key=${MapKey}`)
      await remoteLoad('https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css')
      await remoteLoad('https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js')
      await remoteLoad(`https://webapi.amap.com/maps?v=1.4.10&key=${MapKey}&plugin=AMap.Driving`)
      await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      await remoteLoad('https://cache.amap.com/lbs/static/addToolbar.js')
      this.initMap()
    }
  }
}
</script>
<style lang="less">
  #js-container {
    width: 1110px;
    height: 590px;
    .btnDiv {
      width: 300px;
      margin-left: 50px;
      margin-top: 20px;
      position: absolute;
      z-index: 200;
      .out {
        float: left;
      }
      .bgColorOne {
        background: #0a9df9;
        color: white;
        opacity: 0.8;
      }
    }
  }
  #panel {
    position: fixed;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 70px;
    right: 10px;
    width: 280px;
  }
  #panel .amap-call {
    background-color: #009cf9;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  #panel .amap-lib-driving {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
  }
</style>
