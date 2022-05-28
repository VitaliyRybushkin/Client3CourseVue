import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/components/LoginPage'
import ProfilePage from '@/components/ProfilePage'
import Varriant from '@/components/Varriant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/variant',
      name: 'variant',
      component: Varriant
    }
  ]
})
