import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Management from '@/components/Management'
import TrafficMap from '@/components/roadConditionMap/TrafficMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Management',
      component: Management
    },
    {
      path: '/roadConditionMap.TrafficMap',
      name: 'TrafficMap',
      component: TrafficMap
    }
  ]
})
