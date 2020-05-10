<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list 
      :cities='cities' 
      :hotCities='hotCities'
      :letter='letter'
      ></city-list>
    <city-alphabet 
      :cities='cities'
      @change="handleLetterChange"
      ></city-alphabet>
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
      hotCities:[],
      letter:''
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
    },
    handleLetterChange(letter){
      // console.log(letter);
      this.letter=letter
    }
  },
  mounted() {
    this.getCityInfo()
  },
};
</script>
<style lang="stylus" scoped>

</style>