import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VuePageTransition from 'vue-page-transition'

import './index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faRocket, faGraduationCap, faAddressCard, faBarsProgress } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faRocket,faGraduationCap, faAddressCard, faBarsProgress)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VuePageTransition)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
