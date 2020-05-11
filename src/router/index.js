import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/home/Home'
import City from 'views/city/City'
import Detail from 'views/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id', //动态路由 路径后面带参数 :id 参数放在id中
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
