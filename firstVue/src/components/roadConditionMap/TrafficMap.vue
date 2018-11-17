<template>
  <div id="TrafficMap" style="width: 1350px; height: 600px;">
    <div id="capture">
      <div id="js-container" style="width: 100%;height: 580px;">
      </div>
    </div>
    <div id="panel"></div>
    <div id="mapImg"></div>
    <div class="btnStyle">
       <router-link to="/">
        <el-button type="primary">
          <span style="margin-right: 6px;">
            <i class="el-icon-arrow-left"></i>
            <i class="el-icon-arrow-left"></i>
          </span>
          信息展示
        </el-button>
       </router-link>
    </div>
  </div>
</template>
<script>
import remoteLoad from '@/utils/remoteLoad'
import { MapKey, MapCityName } from './../../../config/config'

// import html2canvas from 'html2canvas'
import axios from 'axios'
import Vue from 'vue'

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
      marker: [],
      infoWindow: [],
      latLogArr: [[114.444594, 23.088805], [114.429831, 23.090384], [114.393954, 23.090068]],
      dialogVisible: false,
      mouseTool: null,
      positionPicker: null,
      crossId: '',
      deviceData: ''
    }
  },
  watch: {
    $route () {
      debugger
      this.initMap()
    }
  },
  methods: {
    // 坐标系转换
    handle_me_x (x) {
      return x / 20037508.34 * 180;
    },
    handle_me_y (my) {
      var mmy = my / 20037508.34 * 180;
      let y = 180 / Math.PI * (2 * Math.atan(Math.exp(mmy * Math.PI / 180)) - Math.PI / 2)
      return y
    },
    // 实例化地图
    async initMap () {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      let AMapUI = this.AMapUI = window.AMapUI
      let AMap = this.AMap = window.AMap
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        let mapConfig = {
          zoom: 18,
          // mapStyle: 'amap://styles/dark',
          cityName: MapCityName,
          center: [114.415038,23.068928]
          // showLabel: false,
          // features: true
        }
        this.map = this.marker = new AMap.Map('js-container', mapConfig)
        // 绘制矩形
        this.mouseTool = new AMap.MouseTool(this.map)
        // 绘制矩形
        this.mouseTool.on('draw', (event) => {
          // event.obj 为绘制出来的覆盖物对象
          console.log(event.obj.Je.path)
          let lng1 = event.obj.Je.path[0].lng
          let lat1 = event.obj.Je.path[0].lat
          let lng2 = event.obj.Je.path[2].lng
          let lat2 = event.obj.Je.path[2].lat
          // console.log(lng1)
          // console.log(lat1)
          // 构造成 LngLat 对象后传入
          var lnglat = new AMap.LngLat(lng1, lat1)
          var pixel = this.map.lngLatToContainer(lnglat)  // 获得 Pixel 对象
          console.log(parseInt(pixel.x))
          console.log(parseInt(pixel.y))
          // console.log(lng2)
          // console.log(lat2)
          // axios({
          //   method: 'GET',
          //   url: `./apis/v3/traffic/status/rectangle?rectangle=${lng1},${lat1};${lng2},${lat2}&key=644ec0171f3fca576d6f058e53d05425`
          // }).then(res => {
          //   console.log(res)
          // })
        })
        // 启用工具条
        AMap.plugin(['AMap.ToolBar'], function () {
          this.map.addControl(new AMap.ToolBar({
            position: 'RB'
          }))
        })
        var trafficLayer = new AMap.TileLayer.Traffic({
          zIndex: 20
        })
        // setInterval(() => {
        //   trafficLayer.setMap(this.map)
        // }, 2000)
        trafficLayer.setMap(this.map) // 添加图层到地图
        // 创建地图拖拽
        this.positionPicker = new PositionPicker({
          mode: 'dragMap', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
          map: this.map // 依赖地图对象
        })
        // 拖拽完成发送自定义 drag 事件
        this.positionPicker.on('success', positionResult => {
          // 过滤掉初始化地图后的第一次默认拖放
          if (!this.dragStatus) {
            this.dragStatus = true
          } else {
            this.$emit('drag', positionResult)
          }
        })
        // 启动拖放
        this.positionPicker.start()
        // 地图信号机图标展示
        interfaces.queryControllerHasGis({}).then((value) => {
          let val = value.data.results
          console.log(value)
          for (let i = 0, size = val.length; i < size; i++) {
            this.deviceData = []
            this.deviceData.push(val[i])
            this.marker[i] = new AMap.Marker({
              icon: './../../static/device_online.png',
              position: [this.handle_me_x(val[i].longitude), this.handle_me_y(val[i].latitude)],
              offset: new AMap.Pixel(-13, -30)
            })
            this.marker[i].setMap(this.map)
            this.marker[i].on('click', () => {
              this.crossId = val[i].crossId
              const { crossId, deviceData } = this
              const vm = new Ctr({
                propsData: {
                  crossId,
                  deviceData
                }
              }).$mount()
              const content = vm.$el
              this.infoWindow = new this.AMap.InfoWindow({
                isCustom: true,
                content,
                offset: new AMap.Pixel(186, 350)  // 弹窗位置（xy）
              })
              this.infoWindow.open(this.map, this.marker[i].getPosition())
              console.log(val[i].crossId)
            })
          }
        })
      })
    }
  },
  async created () {
    if (window.AMap && window.AMapUI) {
      this.initMap()
    } else {
      await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`)
      await remoteLoad(`https://webapi.amap.com/maps?v=1.4.10&key=${MapKey}`)
      await remoteLoad('https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css')
      await remoteLoad('https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js')
      await remoteLoad(`https://webapi.amap.com/maps?v=1.4.10&key=${MapKey}&plugin=AMap.Driving`)
      await remoteLoad(`https://webapi.amap.com/maps?v=1.4.10&key=${MapKey}&plugin=AMap.MouseTool`)
      await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      await remoteLoad('https://cache.amap.com/lbs/static/addToolbar.js')
      this.initMap()
    }
  }
}
</script>
<style lang="less">
#TrafficMap {
   .btnStyle {
    position: absolute;
    left: 30px;
    bottom: 20px;
  }
}
</style>
