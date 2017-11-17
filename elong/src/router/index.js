import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/admin'

import Enter from '../views/enter'
import Register from '../views/register'
import Huangshan from '../views/huangshan'

// import one from '../eids/one'
// import two from '../eids/two'
// import three from '../eids/three'
// import four from '../eids/four'
// import five from '../eids/five'
// import six from '../eids/six'


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
    },
    {
       path:'huangshan',
       name:'huangshan',
       component:Huangshan
    },
    // {
    //   path: '/eids',
    //   name: 'eids',
    //   component: Admin,
    //   // alias:'常见酒店',
    //   children:[
    //     {path:'one',name:'one',alias:'酒店预订',component:one,hidden:true},
    //     {path:'two',name:'two',alias:'机票查询',component:two,hidden:true},
    //     {path:'three',name:'three',alias:'酒店团购',component:three,hidden:true},
    //     {path:'four',name:'four',alias:'热门城市',component:four,hidden:true},
    //     {path:'five',name:'five',alias:'合作伙伴',component:five,hidden:true},
    //     {path:'six',name:'six',alias:'常见酒店',component:six,hidden:true}
    //   ]
    // }
  ]
})
export default router;
