<template>
  <div>
    <h1>接口测试</h1>
    <el-button @click="upLoad">上传</el-button>
    <el-button @click="createTerminal">创建终端</el-button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  methods: {
    upLoad () {
      let url = '/api/https://tsapi.amap.com/v1/track/trace/add'
      let data = {
        key: '5102168971b0786a75e97763f7be509d',
        sid: 12,
        tid: 13
      }
      console.log(url)
      console.log(data)
      axios.post(url, data).then((val) => {
        console.log(val)
      })
    },
    createTerminal () {
      let url = '/api/https://tsapi.amap.com/v1/track/terminal/add'
      let data = {
        key: '5102168971b0786a75e97763f7be509d',
        sid: 12,
        name: '创建终端test',
        desc: '测测测',
        props: {
          x: '330',
          y: '350'
        }
      }
      axios.post(url, data).then((val) => {
        console.log(val)
      })
    }
  }
}
</script>
<style>
</style>
