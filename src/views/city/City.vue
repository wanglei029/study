<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities='cities' :hotCities='hotCities'></city-list>
    <city-alphabet :cities='cities'></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from "components/city/Header";
import CitySearch from "components/city/Search";
import CityList from "components/city/List";
import CityAlphabet from "components/city/Alphabet";

export default {
  name: "City",
  data(){
    return {
      cities:{},
      hotCities:[]
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo(){
      axios.get('api/city.json')
        // .then(this.handleGetCityInfoSucc)
        .then(res=>{
          res=res.data
          if(res.ret&&res.data){
            const data=res.data
            this.cities=data.cities
            this.hotCities=data.hotCities
          }
        })
    },
    handleGetCityInfoSucc(res){
      console.log(res);
    }
  },
  mounted() {
    this.getCityInfo()
  },
};
</script>
<style lang="stylus" scoped>

</style>