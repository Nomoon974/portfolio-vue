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
  mode:"history",
  routes,
  scrollBehavior(to, savePosition) {
    const position = {};
    if (to.hash) {
      position.selector = to.hash
      if (to.hash === to.hash ){
        position.offset = { y: -200}
      }
      if (document.querySelector(to.hash)) {
        return {
          selector: to.hash,
        };
      }
    }
    if (savePosition) {
      return savePosition
    }
    return { x:0, y:0};
  }
})

export default router
