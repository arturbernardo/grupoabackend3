import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/student',
      name: 'Create',
      component: Create
    }
  ]
})
