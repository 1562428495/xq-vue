import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import InterCity from '@/pages/interCity'
import User from '@/pages/User'
import Login from '@/pages/Login'
import Regist from '@/pages/Regist'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/interCity',
      name: 'interCity',
      component: InterCity
    },
    {
      path: 'user',
      name: 'user',
      component: User
    },
    {
      path: 'user/login',
      name: 'login',
      component: Login
    },
    {
      path: 'user/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
