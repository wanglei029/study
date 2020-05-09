<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: { list: Array },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    showSwiper(){
      return this.list.length
    }
  },
  mounted() {
    console.log(this.list);
  }
};
</script>
<style lang='stylus' scoped>
.wrapper >>>.swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31%;

  .swiper-img {
    width: 100%;
  }
}
</style>