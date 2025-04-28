import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/LayoutView.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
            behavior: 'smooth',
            offset: { x: 0, y: 0 }
          })
        }, 500)
      })
    }
    return { x: 0, y: 0 }
  }
})

export default router
