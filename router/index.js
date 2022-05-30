import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/components/LoginPage'
import ProfilePage from '@/components/ProfilePage'
import Varriant from '@/components/Varriant'
import Registation from '@/components/Registation'

import Teacher from '../components/Teacher'
import NotFound from '../components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/variant',
      name: 'variant',
      component: Varriant
    },
    {
      path: '/reg',
      name: 'registration',
      component: Registation
    },
    {
      path: '/' + (Math.random() * (9500 - 1000) + 1000) + '&?',
      name: 'teacher',
      component: Teacher
    },
    {path: '/:pathMatch(.*)*', component: NotFound}
  ]
})
