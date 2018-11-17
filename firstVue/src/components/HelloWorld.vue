<template>
  <div>
    <div style="z-index: 2000;position: absolute; left: 20px; top: 20px;">
      <el-button @click="canvasImg()" size="mini">截屏</el-button>
      <el-button @click="drawRectangle()" size="mini">绘制矩形</el-button>
      <!-- <popup-map
       v-show="false"
       :cross-id="crossId"
       :device-data="deviceData">
       </popup-map> -->
      <!-- <el-button @click="close()" size="mini">取消绘制</el-button> -->
      <!-- <div id="contentDiv" style="width: 100px;height:100px;background: #ccc;">11111111111</div> -->
      <!-- <input  name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/> -->
    </div>
      <div id="capture">
      <div id="js-container">
        <!-- <div class="btnDiv">
          <el-button @click="setOut(1)" size="mini" class="out" :class="{ bgColorOne: isA }">路线一</el-button>
          <el-button @click="setOut(2)" size="mini" class="out" :class="{ bgColorOne: isB }">路线二</el-button>
          <el-button @click="setOut(3)" size="mini" class="out" :class="{ bgColorOne: isC }">路线三</el-button>
        </div> -->
        </div>
         <!-- <div class="input-card" style="width:19rem; position: absolute;">
          <h4>设置地图显示要素（Features）</h4>
          <div id="map-features">
            <div class="input-item">
              <input type='checkbox' name='mapStyle' value='bg' checked>
              <span class="input-text">区域面（bg）</span>
            </div>
            <div class="input-item">
              <input type='checkbox' name='mapStyle' value='road' checked>
              <span class="input-text">道路（road）</span>
            </div>
            <div class="input-item">
              <input type='checkbox' name='mapStyle' value='building' checked>
              <span class="input-text">建筑物（building）</span>
            </div>
            <div class="input-item">
              <input type='checkbox' name='mapStyle' value='point' checked>
              <span class="input-text">标注（point）</span>
            </div>
          </div>
        </div> -->
      </div>
    <div id="panel"></div>
    <div id="mapImg"></div>
  </div>
</template>
<script type="text/javascript">
import remoteLoad from '@/utils/remoteLoad'
import { MapKey, MapCityName } from './../../config/config'
import interfaces from './../apis/GadMap/interface'
import html2canvas from 'html2canvas'
import axios from 'axios'
import Vue from 'vue'
// import router from '@/router'
// import store from '@/store'
import popupMap from './dragMap/popup'
const Ctr = Vue.extend(popupMap)

export default {
  components: {
    popupMap
  },
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
      // infoWindow: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
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
      await interfaces.status({})
      await interfaces.loginDo({'userName': 'admin', 'passWord': 'zhzx1234'})
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
        // 地理经纬度坐标
        // var lon = 114.41485
        // var lat = 23.070103

        // // 构造成 LngLat 对象后传入
        // var lnglat = new AMap.LngLat(lon, lat)
        // var pixel = this.map.lngLatToContainer(lnglat)  // 获得 Pixel 对象
        // console.log(pixel)
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
    },
    close () {
      // this.positionPicker.start()
      console.log(this.mouseTool)
      this.mouseTool.off('draw')
      // this.mouseTool.off('draw')
    },
    drawRectangle (e) {
      this.mouseTool.rectangle({
        strokeColor: 'blue',
        strokeOpacity: 0.3,
        strokeWeight: 2,
        fillColor: '#fcf9f2',
        fillOpacity: 0.1,
        // strokeStyle还支持 solid
        strokeStyle: 'solid',
        // strokeDasharray: [30,10],
      })
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
        this.isA = true
        this.isB = false
        this.isC = false
        this.trajectory(116.379028, 39.865042, 116.427281, 39.903719, num)
      } else if (num === 2) {
        this.isA = false
        this.isB = true
        this.isC = false
        this.trajectory(114.418893, 23.102522, 114.41649, 23.06857, num)
      } else if (num === 3) {
        this.isA = false
        this.isB = false
        this.isC = true
        this.trajectory(114.393659, 23.090679, 114.518113, 23.071571, num)
      }
    },
    //设置地图显示要素
    setMapFeatures() {
      var features = [];
      var inputs = document.querySelectorAll("#map-features input");
      inputs.forEach(function(input) {
        if (input.checked) {
          features.push(input.value);
        }
      });
      this.map.setFeatures(features);
    },
    // html2canvas截屏
    canvasImg () {
      this.dialogVisible = true
      html2canvas(document.querySelector("#capture")).then(canvas => {
        document.getElementById('mapImg').innerHTML = ''
        document.getElementById('mapImg').appendChild(canvas)
      })
    },
    closeInfoWindow() {
      this.map.clearInfoWindow()
    },
    update (e) {   // 上传照片
      var self = this
      let file = e.target.files[0]
      // console.log(file)
      /* eslint-disable no-undef */
      let param = new FormData()  // 创建form对象
      param.append('imagefile', file)  // 通过append向form对象添加数据
      param.append('coordinate', '(656,136), (677,136), (656,210), (677,210)') // 添加form表单中其他数据
      console.log('23456789')
      console.log(param.get('imagefile')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
     // 添加请求头
     console.log(param)
      axios.post('./apis/analysisPic', param, config)
      .then(response => {
        // if (response.data.code === 0) {
        //   self.ImgUrl = response.data.data
        // }
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
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
  body, html {
    padding: 2px 1px 0 1.5px;
    margin: 0;
  }
  #js-container {
    width: 1360px;
    height: 650px;
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
  #mapImg {
    width: 100%;
    height: 100%;
    border-top: 3px solid #000;
    margin-top: 20px;
  }
  #map-features .input-item {
    height: 2rem;
  }
  .content-window-card {
      position: relative;
      box-shadow: none;
      bottom: 0;
      left: 0;
      width: auto;
      padding: 0;
  }

  .content-window-card p {
      height: 2rem;
  }

  .custom-info {
      border: solid 1px silver;
  }

  div.info-top {
      position: relative;
      background: none repeat scroll 0 0 #F9F9F9;
      border-bottom: 1px solid #CCC;
      border-radius: 5px 5px 0 0;
  }

  div.info-top div {
      display: inline-block;
      color: #333333;
      font-size: 14px;
      font-weight: bold;
      line-height: 31px;
      padding: 0 10px;
  }

  div.info-top img {
      position: absolute;
      top: 10px;
      right: 10px;
      transition-duration: 0.25s;
  }

  div.info-top img:hover {
      box-shadow: 0px 0px 5px #000;
  }

  div.info-middle {
      font-size: 12px;
      padding: 10px 6px;
      line-height: 20px;
  }

  div.info-bottom {
      height: 0px;
      width: 100%;
      clear: both;
      text-align: center;
  }

  div.info-bottom img {
      position: relative;
      z-index: 104;
  }

  span {
      margin-left: 5px;
      font-size: 11px;
  }

  .info-middle img {
      float: left;
      margin-right: 6px;
  }
</style>
