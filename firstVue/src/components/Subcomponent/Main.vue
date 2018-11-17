<template>
  <div id="popupDiv">
    <el-card class="box-card" style="float: left;">
      <div class="nameStyle">{{ crossName }}</div>
      <div :id='`$div1${crossId}`' class="flrstDiv">
        <div class="countDownStyle" :id="'countDownID' + crossId">{{ stepsec }}</div>
        <div class="stateStyle">状态：{{ workMsg }}</div>
        <svg-template-test
          :data="data"
          :cross-id="crossId"
          :color-map="colorMap">
        </svg-template-test>
      </div>
    </el-card>
    <el-tabs type="border-card" style="float: left;margin-left: 10px;width: 770px;height: 575px;">
      <el-tab-pane label="模块一">
        <phase-diagram
          :cross-id="crossId">
        </phase-diagram>
      </el-tab-pane>
      <el-tab-pane label="模块二">
        <table-txt></table-txt>
      </el-tab-pane>
      <el-tab-pane label="模块三">配置管理</el-tab-pane>
      <el-tab-pane label="模块四">角色管理</el-tab-pane>
      <!-- <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane> -->
    </el-tabs>
    <div class="btnStyle">
      <router-link to="/roadConditionMap.TrafficMap">
        <el-button type="primary">路况图
          <span style="margin-left: 6px;">
            <i class="el-icon-arrow-right"></i><i class="el-icon-arrow-right"></i>
          </span>
        </el-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import SvgTemplateTest from './SvgTemplate'
import webSocket from '@/apis/ToolFuntion/WebSocket'
import LukouMonitor from '@/apis/Monitor/LukouMonitor'
import SVG from '@/apis/ToolFuntion/Svg'
import TableTxt from './Table/tableTxt'
import interfaces from './../../apis/GadMap/interface'
import PhaseDiagram from './Table/phaseDiagram'
import _ from 'lodash'

export default {
  data () {
    return {
      data: {
        'phaseOrderId': '',
        'crossId': '',
        'phaseId': '',
        'stepid': 'G',
        'stepsec': 0,
        'lampStatusMap': {
          '22': 0,
          '23': 0,
          '24': 0,
          '25': 0,
          '26': 0,
          '27': 0,
          '28': 0,
          '29': 0,
          '30': 0,
          '31': 0,
          '10': 0,
          '32': 0,
          '11': 0,
          '12': 0,
          '13': 0,
          '14': 0,
          '15': 0,
          '16': 0,
          '17': 0,
          '18': 0,
          '19': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '20': 0,
          '21': 0
        },
        'type': 2
      },
      colorMap: ['RED', 'GREEN', 'YELLOW', '#BBBBBB'],
      ws: null,
      stepsec: '',
      stepsecTimer: null,
      workMsg: '',
      crossName: '1064演达大道/麦地东路口（沃尔玛路口）'
    }
  },
  props: {
    deviceData: {
      type: [Array, String]
    },
    crossId: {
      type: [String, Number]
    }
  },
  watch: {
    crossId: function (newVal, oldVal) {
    }
  },
  computed: {
  },
  methods: {
    dataReceived (data) {
      const { crossId } = this
      this.stepsec = data.stepsec
      if (document.getElementById('countDownID' + crossId) !== null) {
        if (data.phaseId.indexOf('PR') !== -1) {
          document.getElementById('countDownID' + crossId).style.background = 'GREEN'
          document.getElementById('countDownID' + crossId).style.color = 'Red'
        } else if (data.phaseId.indexOf('Y') !== -1) {
          document.getElementById('countDownID' + crossId).style.background = 'YELLOW'
          document.getElementById('countDownID' + crossId).style.color = 'black'
        } else if (data.phaseId.indexOf('G') !== -1) {
          document.getElementById('countDownID' + crossId).style.background = 'GREEN'
          document.getElementById('countDownID' + crossId).style.color = 'white'
        } else if (data.phaseId.indexOf('R') !== -1) {
          document.getElementById('countDownID' + crossId).style.background = 'RED'
          document.getElementById('countDownID' + crossId).style.color = 'white'
        } else if (data.phaseId.indexOf('PF') !== -1) {
          document.getElementById('countDownID' + crossId).style.background = 'GREEN'
          document.getElementById('countDownID' + crossId).style.color = 'white'
        }
      }
      clearInterval(this.stepsecTimer)
      this.stepsecTimer = setInterval(() => {
        this.stepsec --
        if (this.stepsec <= 0) {
          this.stepsec = 0
          clearInterval(this.stepsecTimer)
        }
      }, 1000)
      if (_.isObject(data)) {
        this.data = data
      } else {
        console.warn(data)
      }
    },
    async getDeviceState () {
      const { crossId } = this
      await interfaces.status({})
      await interfaces.loginDo({'userName': 'admin', 'passWord': 'zhzx1234'})
      const ccuDate = await LukouMonitor.initCurrentProgram(crossId, 1, 7)
      let ccuData = ccuDate.data.results
      // MTC2000和MTC1032信号机初始灯态、状态
      // this.defaultMsg = ccuData
      if (ccuData.lampStatusMap !== undefined && ccuData !== undefined && ccuDate.data.msg !== '设备与服务器之间发生异常,无法通讯.') {
        this.defaultMsg = ccuData
        this.data = ccuData
      } else {
        this.defaultMsg = ''
      }
      if (ccuData.stepsec !== undefined) {
        this.stepsec = ccuData.stepsec
        clearInterval(this.svgInterval)
        this.svgInterval = setInterval(() => {
          this.stepsec--
          if (this.stepsec < 0) {
            this.stepsec = 0
            clearInterval(this.svgInterval)
          }
        }, 1000)
      }
      if (ccuData.utcSignalStatus !== undefined && ccuData.utcSignalStatus.mNStepSec !== undefined) {
        this.stepsec = 0
        clearInterval(this.svgIntervalb)
        this.svgIntervalb = setInterval(() => {
          this.stepsec++
          if (this.stepsec === 600) {
            clearInterval(this.svgIntervalb)
          }
        }, 1000)
      }
      if (ccuData === undefined) return
      const { utcLCStatusMap, programList, utcSignalStatus } = ccuData
      const svgData = await SVG.queryShapes(crossId)
      if (svgData.tag !== undefined && svgData.tag.length > 0) {
        this.tag = svgData.tag
      } else {
        this.tag = ''
      }
      ccuData['crossId'] = crossId
      if (!utcLCStatusMap.picComm) {
        this.workMsg = '通讯故障'
        ccuData['controlStrage'] = '通讯故障'
        if (this.ws) this.ws.close()
        return
      } else if (utcLCStatusMap.picVip) {
        this.workMsg = '特勤控制'
        this.implementButtonStates = false
        ccuData['controlStrage'] = '特勤控制'
      } else if (utcLCStatusMap.picPCO) {
        this.workMsg = '中心手动'
        ccuData['controlStrage'] = '中心手动'
        this.centerLock = true
      } else if (!utcLCStatusMap.picConflict) {
        this.workMsg = '通讯故障'
        ccuData['controlStrage'] = '通讯故障'
        // 暂改
        // if (this.ws) this.ws.close()
        // this.workMsg = '绿绿冲突'
        // ccuData['controlStrage'] = '绿绿冲突'
      } else if (!utcLCStatusMap.picSignal) {
        this.workMsg = '灯泡故障'
        ccuData['controlStrage'] = '灯泡故障'
      } else if (!utcLCStatusMap.picPower) {
        this.workMsg = '电源故障'
        ccuData['controlStrage'] = '电源故障'
      } else if (!utcLCStatusMap.picDoor) {
        this.workMsg = '箱门开启'
        ccuData['controlStrage'] = '箱门开启'
      } else if (!utcLCStatusMap.picDatabase) {
        this.workMsg = '方案错误'
        ccuData['controlStrage'] = '方案错误'
      } else if (!utcLCStatusMap.picDetector) {
        this.workMsg = '检测器'
        ccuData['controlStrage'] = '检测器'
      } else if (!utcLCStatusMap.picOutput) {
        this.workMsg = '输出模块故障'
        ccuData['controlStrage'] = '输出模块故障'
      } else if (!utcLCStatusMap.picTrans) {
        this.workMsg = '方案转换'
        ccuData['controlStrage'] = '方案转换'
      } else if (!utcLCStatusMap.picFlasher) {
        this.workMsg = '闪烁'
        ccuData['controlStrage'] = '闪烁'
      } else if (utcLCStatusMap.picPoSwitch === true) {
        this.workMsg = '现场手动'
        ccuData['controlStrage'] = '现场手动'
      } else if (utcLCStatusMap.picPoAllRed) {
        this.workMsg = '现场全红'
        ccuData['controlStrage'] = '现场全红'
      } else if (utcLCStatusMap.picPoFlash) {
        this.workMsg = '现场闪烁'
        ccuData['controlStrage'] = '现场闪烁'
      } else if (utcLCStatusMap.picOpScu) {
        this.workMsg = '降级处理'
        ccuData['controlStrage'] = '降级处理'
      } else if (utcLCStatusMap.picOpAct) {
        this.workMsg = '本地感应'
        ccuData['controlStrage'] = '本地感应'
      } else if (utcLCStatusMap.picOpopAct) {
        this.workMsg = '优化感应'
        ccuData['controlStrage'] = '优化感应'
      } else if (utcLCStatusMap.picOpBrt) {
        this.workMsg = '公交优先'
        ccuData['controlStrage'] = '公交优先'
      } else if (utcLCStatusMap.picOpPhase) {
        this.workMsg = '时相控制'
        ccuData['controlStrage'] = '时相控制'
      } else if (utcLCStatusMap.picOpDynamic) {
        this.workMsg = '动态控制'
        ccuData['controlStrage'] = '动态控制'
      } else if (utcLCStatusMap.picoprc) {
        this.workMsg = '中心协调'
        ccuData['controlStrage'] = '中心协调'
        this.centerLock = false
      } else if (utcLCStatusMap.picSCU) {
        this.workMsg = '时间表'
        ccuData['controlStrage'] = '时间表'
        this.centerLock = false
      }
      const wsData = await webSocket.connectSocketWelcome(crossId, this.dataReceived, undefined, this)
      this.ws = wsData
    }
  },
  created () {
    this.getDeviceState()
  },
  components: {
    SvgTemplateTest,
    TableTxt,
    PhaseDiagram
  }
}
</script>
<style lang="less">
#popupDiv {
  .flrstDiv {
    position: relative;
    width: 500px;
    height: 500px;
    background: #535353;
    // margin-left: 30px;
    // margin-top: 30px;
  }
  .countDownStyle{
    position: absolute;
    top: 23px;
    left: 30px;
    display:block;
    width:35px;
    height:35px;
    background:green;
    border-radius: 20%;
    text-align: center;
    line-height: 35px;
    font-size: 22px;
    color: #fff;
  }
  .stateStyle {
    color: white;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  .nameStyle {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 14px;
  }
  .btnStyle {
    position: absolute;
    right: 50px;
    bottom: 20px;
  }
}
</style>
