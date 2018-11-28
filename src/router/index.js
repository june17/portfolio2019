import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import PageProducts from '@/pages/PageProducts'
import PageAnimations from '@/pages/PageAnimations'
import PageResume from '@/pages/PageResume'
import PageEDGame from '@/pages/PageEDGamification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/2danimations',
      name: 'PageAnimations',
      component: PageAnimations
    },
    {
      path: '/productdesigns',
      name: 'PageProducts',
      component: PageProducts
    },
    {
      path: '/resume',
      name: 'PageResume',
      component: PageResume
    },
    {
      path: '/edgamification',
      name: 'PageEDGame',
      component: PageEDGame
    }
  ],
  mode: 'history'
})
