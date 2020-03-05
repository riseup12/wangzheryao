import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
import router from './router'
Vue.config.productionTip = false

import Card from './components/card.vue'
Vue.component('m-card', Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
Vue.prototype.$http = axios.create(
  { baseURL: 'http://localhost:3000/web/api' }
)
Vue.use(VueAwesomeSwiper)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
