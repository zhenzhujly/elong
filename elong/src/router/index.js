import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/admin'


Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    }
  ]
})
export default router;