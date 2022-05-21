import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),

  },
  {
    path:'/projets',
    name:'projets',
    component: () => import('../views/ProjetsView.vue')
  },
  {
    path:'/formations',
    name:'formations',
    component: () => import('../views/FormationsView.vue')
  },
  {
    path:'/competences',
    name:'competences',
    component: () => import('../views/CompetencesView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
