import Vue from 'vue'
import Router from 'vue-router'
import Good from '@/components/Good'
import Commend from '@/components/Commend'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Good',
      component: Good
    },
    {
      path: '/good',
      name: 'Good',
      component: Good
    },
    {
      path: '/commend',
      name: 'Commend',
      component: Commend
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
