// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/main.css'
/*
import * as fb from 'firebase/app'
*/

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  url: 'http://192.168.1.105:8080/'
  /*  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyCT-rzxe7yZNl52aKREGtOUHbcREV1j-0w',
      authDomain: 'coursework-c1fe4.firebaseapp.com',
      projectId: 'coursework-c1fe4',
      storageBucket: 'coursework-c1fe4.appspot.com',
      messagingSenderId: '725219476248',
      appId: '1:725219476248:web:3a83409da496b0e569546d',
      measurementId: 'G-NQ2VZKK41P'
    }

    fb.initializeApp(firebaseConfig)
  } */
})
