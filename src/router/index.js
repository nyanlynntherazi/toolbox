import Vue from 'vue'
import Router from 'vue-router'
import ToolList from '@/components/ToolList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ToolList
    }
  ]
})
