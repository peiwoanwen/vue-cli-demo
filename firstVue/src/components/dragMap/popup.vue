<template>
  <div id="popupDiv">
    <div :id='`$div1${crossId}`' class="flrstDiv" @click="div">
      <div class="countDownStyle" :id="'countDownID' + crossId">{{ stepsec }}</div>
      <svg-template-test
        :data="data"
        :cross-id="crossId"
        :color-map="colorMap">
      </svg-template-test>
    </div>
  </div>
</template>
<script>
import SvgTemplateTest from './../SVG/MainTest'
import webSocket from '@/apis/ToolFuntion/WebSocket'
import _ from 'lodash'

export default {
  components: {
    SvgTemplateTest
  },
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
      stepsecTimer: null
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
      console.log(data)
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
    div () {
      console.log(this.crossId)
    },
    async getDeviceState () {
      const { crossId } = this
      const wsData = await webSocket.connectSocketWelcome(crossId, this.dataReceived, undefined, this)
      this.ws = wsData
    }
  },
  created () {
    this.getDeviceState()
  }
}
</script>
<style lang="less">
#popupDiv {
  .flrstDiv {
    width: 350px;
    height: 350px;
    background: #535353;
  }
  .countDownStyle{
      position: absolute;
      top: 10px;
      left: 10px;
      display:block;
      width:30px;
      height:30px;
      background:green;
      border-radius: 20%;
      text-align: center;
      line-height: 30px;
      font-size: 20px;
      color: #fff;
    }
}
</style>
