import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pet from '../views/Pet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Cats.vue')
    component: Cats
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/pet/:species/:id',
    name: 'Pet',
    component: Pet
  }
]

const router = new VueRouter({
  routes
})

export default router
