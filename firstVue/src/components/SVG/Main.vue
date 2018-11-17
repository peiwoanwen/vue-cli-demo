<template>
  <svg
    v-if="statePaths"
    xmlns="http://www.w3.org/2000/svg" data-v-5c20c5fb="" width="100%" id="interSvgLayerId" height="100%" viewBox="0 0 600 600" preserveAspectRatio="xMinYMin meet" style="display: block;">
    <defs>
      <marker
        v-for="{ id, d, fill } of markers"
        :key="id"
        :id="id"
        markerWidth="13"
        markerHeight="13"
        name="marker"
        refX="1"
        refY="1.5"
        orient="auto">
        <path
          :d="d"
          style="display:block;"
          :fill="fill"
          transform="scale(0.5)">
        </path>
      </marker>
    </defs>  
    <g stroke-width="8">
      <path
        v-for="path of statePaths"
        :key="path.key"
        :d="path.d"
        :stroke="path.color"
        :marker-end="path.end"
        :marker-start="path.start"
        fill="none">
      </path>
    </g>
  </svg>
</template>

<script>
import _ from 'lodash'
import path24 from './path24'

const COLORS = ['RED', 'GREEN', 'YELLOW', 'none']

const MARKERS = {
  end: 'M0,0 L0,6 L6,3 L0,0',
  start: 'M6,6 L6,0 L0,3 L6,6'
}

export default {
  name: 'SvgTemplate',
  props: {
    data: {
      type: Object
    },
    crossId: {
      type: Number
    }
  },
  data() {
    return {
      paths: path24,
      // markers,
      isData: ''
    }
  },
  computed: {
    statePaths() {
      const { data, paths } = this
      if (data.type === 2 || data.type === 8 || data.lampStatusMap !== undefined) {
        this.isData = data.lampStatusMap
      } else if (data.type === 9 || data.type === 10 || data.lampStatus !== undefined) {
        this.isData = data.lampStatus
      }
      _.map(this.isData, (element, index) => {
        if (index === '13' || index === '14' || index === '15' || index === '16' || index === '21' || index === '22' || index === '23' || index === '24') {
          if (this.isData[index] === 2) {
            this.isData[index] = 1
          }
        }
      })
      if (!data || !this.isData) return
      const result = _.map(paths, (path) => {
        const { key, end, start } = path
        const colorIndex = this.isData[key]
        const color = COLORS[colorIndex]

        const $path = { ...path, color }

        if (end) {
          $path.end = `url(#end-${colorIndex}-${this.crossId})`
        }
        if (start) {
          $path.start = `url(#start-${colorIndex}-${this.crossId})`
        }
        return $path
      })
      return result
    },
    markers () {
      const result = []
      _.each(COLORS, (fill, index) => {
        const keys = Object.keys(MARKERS)
        _.each(keys, (key) => {
          const id = `${key}-${index}-${this.crossId}`
          const d = MARKERS[key]
          result.push({ id, d, fill })
        })
      })
      return result
    }
  }
}
</script>

