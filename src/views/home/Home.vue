<template>
  <div>
    <!-- <home-header :city="city"></home-header> -->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
//整个首页页面应该只发送一个ajax来获取数据 如果每个组件都发送ajax请求会耗费性能 
<script>
import HomeHeader from "@/components/home/Header.vue";
import HomeSwiper from "@/components/home/Swiper";
import HomeIcons from "@/components/home/Icons";
import HomeRecommend from "@/components/home/Recommend";
import HomeWeekend from "@/components/home/Weekend";
import axios from 'axios'
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data(){
    return {
      // city:'', //使用vuex来管理项目的数据 city不再从ajax中获取，而是从store中获取
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res.ret&&res.data){
        const data=res.data
        // this.city=data.city //使用store来管理数据
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
      console.log(res);
    }
  },
  mounted() {
    this.getHomeInfo()
  },
};
</script>
<style>
</style>