import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
// 建议：只要使用localStorage就用try catch 
// 因为某些浏览器，如果用户关闭了本地存储这样的功能，或者使用隐身模式
// 此时使用localStorage 很可能导致浏览器直接抛出异常 代码整个就运行不了


export default new Vuex.Store({
  state,
  mutations,
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city
    }
  },
  // actions: {
  //   changeCity(ctx,city){
  //     console.log(city);
  //     ctx.commit('changeCity',city)
  //   }
  // },
  modules: {
  }
})
