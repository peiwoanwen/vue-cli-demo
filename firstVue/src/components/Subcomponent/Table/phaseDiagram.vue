<template>
  <div id="phaseDiv">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple" style="overflow-x:scroll;white-space:nowrap;overflow-y:auto; width: 100%;" id="scrollXdiv">
          <div style="border-right: none;border-bottom:none; width: 25%;   display: inline-block;border: 1px solid #e4dada;
            background-color: #eeeeee;" name='divLJP' :id="'divLJP' + todo" v-for="todo in queryGet.length" :key="todo" >
            <span class="orderStyle" :id="'timmingPCycle' + todo">
              {{ timmingPCycle[todo] }}
            </span>
            <svg version="1.1"
              xmlns="http://www.w3.org/2000/svg" style="display: block;" preserveAspectRatio="xMinYMin meet" viewBox="0,0,600,600">
              <defs>
                <marker id="markerArrowGREEN"  markerWidth="13" markerHeight="13" refX="1" refY="1.5" orient="auto" >
                  <path d="M0,0 L0,6 L6,3 L0,0" style="fill: GREEN;" transform="scale(0.5)"/>
                </marker>
                <marker id="markerArrowBackGREEN"  markerWidth="13" markerHeight="13" refX="1" refY="1.5" orient="auto" >
                  <path d="M6,6 L6,0 L0,3 L6,6" style="fill: GREEN;" transform="scale(0.5)"/>
                </marker>
              </defs>
              <g :id="'svgLJP' + todo">
              </g>
            </svg>
          </div>
        </div>
      </el-col>
      <el-col>
        <div class="grid-content bg-purple-dark">
          <table style="width: 100%; font-size: 12px;border:1px solid #97a8be">
            <tr style="background-color: #d4d4ff;">
              <td class="table-title" style="padding:3px 0 3px 6px;font-size: 14px;">基准方向 - {{ basedIrectionMap[basedIrection] }}</td>
            </tr>
            <tr>
              <td style="height: 100px;">
                <div style="overflow:auto; width:100%;">
                  <template>
                    <el-table
                      :data="timmingPlanCycle"
                      style="width: 100%; height: 100px;">
                      <el-table-column v-for="(value, key) in timmingPlanCycle[0]"
                        :key="key"
                        v-bind:prop="key"
                        :label="key" width="100"
                        >
                      </el-table-column>
                    </el-table>
                  </template>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import PhaseSequence from '@/apis/Plan/PhaseSequence'
import LukouMonitor from '@/apis/Monitor/LukouMonitor'
import webSocket from '@/apis/ToolFuntion/WebSocket'
import SVG from '@/apis/ToolFuntion/Svg'
import _ from 'lodash'
export default {
  watch: {
    runoffSetval (val, oldVal) {
      var index = 0
      var _this = this
      var docC = ''
      var docT = ''
      document.getElementsByName('divLJP').forEach(function(div) {
        div.style.border = '1px solid #e4dada'
      }, this)
      if (val.indexOf('G') === 0) { // 绿灯
        index = val.substr(1, val.length)
        docC = document.getElementById('divLJP' + index)
        docT = document.getElementById('timmingPCycle' + index)
        if (docC !== undefined && docC !== null) {
          docC.style.border = '2px solid GREEN'
          document.getElementById('timmingPCycle' + this.indexBak).style.backgroundColor = 'GREEN'
          document.getElementById('timmingPCycle' + this.indexBak).innerHTML = _this.timmingPCycleBak[this.indexBak]
          document.getElementById('timmingPCycle' + this.indexBak).style.color = 'white'
          docT.style.backgroundColor = 'GREEN'
          docT.style.color = 'white'
          _this.timmingPCycle[this.indexBak] = _this.timmingPCycleBak[this.indexBak]
        }
      } else if (val.indexOf('Y') === 0) { // 黄灯
        index = val.substr(1, val.length)
        docC = document.getElementById('divLJP' + index)
        docT = document.getElementById('timmingPCycle' + index)
        if (docC !== undefined && docC !== null) {
          docC.style.border = '2px solid YELLOW'
          docT.style.backgroundColor = 'YELLOW'
          docT.style.color = 'black'
        }
      } else if (val.indexOf('R') === 0) { // 红灯
        index = val.substr(1, val.length)
        docC = document.getElementById('divLJP' + index)
        docT = document.getElementById('timmingPCycle' + index)
        if (docC !== undefined && docC !== null) {
          docC.style.border = '2px solid RED'
          docT.style.backgroundColor = 'RED'
          docT.style.color = 'white'
        }
      } else if (val.indexOf('PF') === 0) {
        index = val.substr(2, val.length)
        docC = document.getElementById('divLJP' + index)
        docT = document.getElementById('timmingPCycle' + index)
        if (docC !== undefined && docC !== null) {
          docC.style.border = '2px solid blue'
          docT.style.backgroundColor = 'blue'
          docT.style.color = 'white'
        }
      } else if (val.indexOf('PR') === 0) {
        index = val.substr(2, val.length)
        docC = document.getElementById('divLJP' + index)
        docT = document.getElementById('timmingPCycle' + index)
        if (docC !== undefined && docC !== null) {
          docC.style.border = '2px solid #ad459f'
          docT.style.backgroundColor = '#ad459f'
          docT.style.color = 'white'
        }
      }
      this.indexBak = index
      if (document.getElementById('scrollXdiv') !== undefined && document.getElementById('scrollXdiv') !== null) { // 定位
        if (document.getElementById('divLJP' + index) !== undefined && document.getElementById('divLJP' + index) !== null && document.getElementById('divLJP' + index).offsetWidth !== null) {
          this.scrollXdiv = document.getElementById('divLJP' + index).offsetWidth * (index - 2)
          if (document.getElementById('scrollXdiv').offsetWidth < this.scrollXdiv) {
            this.scrollXdiv = 0
          }
        } else {
          this.scrollXdiv = 0
        }
        document.getElementById('scrollXdiv').scrollLeft = this.scrollXdiv
      }
      _this.timmingPCycle[index] = this.pacetime
      if (docT !== undefined && docT !== null && docT !== '') {
        if (val.indexOf('G') === 0) {
          _this.timmingPCycle[index] = _this.timmingPCycle[index]
        }
        docT.innerHTML = _this.timmingPCycle[index]
      }
      if (this.clearIntervalState !== null && this.clearIntervalState !== undefined) {
        clearInterval(this.clearIntervalState)
      }
      if (docT !== undefined && docT !== null && docT !== '') {
        this.clearIntervalState = setInterval(() => {
          _this.timmingPCycle[index] = _this.timmingPCycle[index] - 1
          docT.innerHTML = _this.timmingPCycle[index]
          if (_this.timmingPCycle[index] <= 0) {
            clearInterval(_this.clearIntervalState)
          }
        }, 1000)
      }
    }
  },
  props: {
    crossId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      queryGet: [],
      shape_map: {},
      timmingPCycle: {},
      routeList: [],
      phaseOrderno: '',
      runoffSetval: '',
      ws: null,
      pacetime: '',
      clearIntervalState: null,
      basedIrectionMap: ['北', '东北向', '东向', '东南向', '南向', '西南向', '西向', '西北向'],
      basedIrection: 0,
      timmingPlanCycle: [],
      timmingPCycleBak: {}
    }
  },
  methods: {
    async changeColor (sig, _this, websocket) {
      if (sig.phaseId !== undefined) {
        _this.runoffSetval = sig.phaseId // 运行相位
      }
       if (sig.stepsec !== undefined) {
        _this.pacetime = sig.stepsec // 步伐时间
      }
      if (sig.greenLampTime !== undefined) {
        var tpc = {}
        var count = 0
        _this.timmingPlanCycle = sig.greenLampTime // 相序编号
        _this.timmingPlanCycle.forEach(function(element, index) {
          count = index + 1
          tpc['相位' + count] = element
          _this.timmingPCycle[count] = element
          _this.timmingPCycleBak[count] = element
        }, this)
        _this.timmingPlanCycle = [tpc]
      }
    },
    async init () {
      const { crossId, ws } = this
      await webSocket.connectSocketLukouMonitor(crossId, ws, this)
      const ccuDate = await LukouMonitor.initCurrentProgram(crossId, 1, 7)
      let ccuData = ccuDate.data.results
      if (ccuData.programList !== undefined) {
        this.phaseOrderno = ccuData.programList[0].phaseOrderIdHex
        var tpc = {}
        this.timmingPCycle = {}
        this.timmingPCycleBak = {}
        ccuData.programList.forEach(function(element) {
          tpc['相位' + element.phaseId] = element.max1Val
          this.timmingPCycle[element.phaseId] = element.max1Val
          this.timmingPCycleBak[element.phaseId] = element.max1Val
        }, this)
        this.timmingPlanCycle = [tpc]
      }
      const phaseData = await PhaseSequence.queryAllPhaseOrderByCrossIdphaseOrderId({crossId: crossId, phaseOrderIdHex: this.phaseOrderno})
      const val = phaseData.data.results
      const svgData = await SVG.queryShapes(crossId)
      _.map(svgData.routeCountDown, element => {
        if (element.amphenolCon !== undefined) {
          if (this.shape_map[element.amphenolCon] === undefined) {
            this.shape_map[element.amphenolCon] = [element]
          } else {
            if (typeof this.shape_map[element.amphenolCon] === Array) {
              this.shape_map[element.amphenolCon].push(element)
            }
          }
        }
      })
      _.map(svgData.routePedestrianLampPic, element => {
        if (element.amphenolCon !== undefined) {
          if (this.shape_map[element.amphenolCon] === undefined) {
            this.shape_map[element.amphenolCon] = [element]
          } else {
            if (typeof this.shape_map[element.amphenolCon] === Array) {
              this.shape_map[element.amphenolCon].push(element)
            }
          }
        }
      })
      _.map(svgData.routeArrowLight, element => {
        if (element.amphenolCon !== undefined) {
          if (this.shape_map[element.amphenolCon] === undefined) {
            this.shape_map[element.amphenolCon] = [element]
          } else {
            if (typeof this.shape_map[element.amphenolCon] === Array) {
              this.shape_map[element.amphenolCon].push(element)
            }
          }
        }
      })
      _.map(svgData.routeLamps, element => {
        if (element.amphenolCon !== undefined) {
          if (this.shape_map[element.amphenolCon] === undefined) {
            this.shape_map[element.amphenolCon] = [element]
          } else {
            if (typeof this.shape_map[element.amphenolCon] === Array) {
              this.shape_map[element.amphenolCon].push(element)
            }
          }
        }
      })
      _.map(svgData.routeArrowStraight, element => {
        if (element.amphenolCon !== undefined) {
          if (this.shape_map[element.amphenolCon] === undefined) {
            this.shape_map[element.amphenolCon] = [element]
          } else {
            if (typeof this.shape_map[element.amphenolCon] === Array) {
              this.shape_map[element.amphenolCon].push(element)
            }
          }
        }
      })
      _.map(svgData.routePedestrianLampArrow, element => {
        if (element.amphenolCon !== undefined) {
          if (this.shape_map[element.amphenolCon] === undefined) {
            this.shape_map[element.amphenolCon] = [element]
          } else {
            this.shape_map[element.amphenolCon].push(element)
          }
        }
      })
      _.map(svgData.routeUturnArrow, element => {
        if (element.amphenolCon !== undefined) {
          if (this.shape_map[element.amphenolCon] === undefined) {
            this.shape_map[element.amphenolCon] = [element]
          } else {
            if (typeof this.shape_map[element.amphenolCon] === Array) {
              this.shape_map[element.amphenolCon].push(element)
            }
          }
        }
      })
      _.map(svgData.routeWheelArrow, element => {
        if (element.amphenolCon !== undefined) {
          if (this.shape_map[element.amphenolCon] === undefined) {
            this.shape_map[element.amphenolCon] = [element]
          } else {
            if (typeof this.shape_map[element.amphenolCon] === Array) {
              this.shape_map[element.amphenolCon].push(element)
            }
          }
        }
      })
      console.log(this.shape_map)
      let queryResult = [[]]
      for (let key in val) {
        queryResult[JSON.parse(key).phaseNo - 1] = val[key]
      }
      this.queryGet = []
      let arr = []
      queryResult.forEach((res, index) => {
        if (res !== undefined) {
          res.forEach(element => {
            arr.push(this.shape_map[element])
          })
          this.queryGet.push(arr)
          arr = []
        }
      })
      setTimeout(() => {
        this.queryGet.forEach(function(ele, index) {
          SVG.drawShapesFromArray('svgLJP' + (index + 1), ele, 'GREEN', undefined, '')
        })
      })
    }
  },
  async mounted () {
    this.init()
  }
}
</script>
<style lang="less">
#phaseDiv {
  .orderStyle{
    position:relative;
    display:block;
    width:24px;
    height:24px;
    background:green;
    border-radius: 20%;
    text-align: center;
    line-height: 26px;
    font-size: 16px;
    color: #fff;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
}
</style>
