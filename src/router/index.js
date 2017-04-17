import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import interCity from '@/pages/interCity'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/interCity',
      name: 'interCity',
      component: interCity
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
