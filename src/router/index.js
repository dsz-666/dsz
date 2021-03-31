import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }, {
    path: '/drag1',
    name: 'drag1',
    component: () => import('../views/drag1.vue')
  },
  {
    path: '/show2',
    name: 'show2',
    component: () => import('../views/show2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
