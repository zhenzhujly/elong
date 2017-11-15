import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/admin'

import Enter from '../views/enter'
import Register from '../views/register'


Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    },
    {
       path:'enter',
       name:'enter',
       component:Enter
    },
    {
       path:'register',
       name:'register',
       component:Register
    }
  ]
})
export default router;