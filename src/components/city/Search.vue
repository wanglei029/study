<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import {mapMutations} from 'vuex'
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.leangth;
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.dispatch('changeCity',city) //不通过actions来修改store中的数据
      // this.$store.commit("changeCity", city);
      this.changeCity(city)
      this.$router.push("/");
    },
    ...mapMutations(['changeCity'])
  },
  // watch 监听器 监听keyword的改变
  watch: {
    keyword() {
      // 函数节流
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100); //当keyword发生改变的时候 隔100毫秒在执行
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;

  .search-input {
    width: 100%;
    height: 0.6rem;
    padding: 0 0.2rem;
    line-height: 0.6rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    box-sizing: border-box;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>