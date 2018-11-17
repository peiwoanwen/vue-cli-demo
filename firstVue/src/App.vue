<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    <!-- <left-tree></left-tree> -->
    <div style="float: left;">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import LeftTree from './LeftTree'

export default {
  components: {
    AppHeader,
    LeftTree
  },
  name: 'App'
}
</script>

<style scoped>
.left-tree {
  float: left;
}
</style>
