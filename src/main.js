import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from './store'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'styles/iconfont/iconfont.css'

Vue.config.productionTip = false
// 移动端300ms点击延迟
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
