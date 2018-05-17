import Vue from 'vue'
import Router from 'vue-router'
import Greeting from '@/components/Greeting'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Greeting',
      component: Greeting
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
