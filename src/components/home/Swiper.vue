<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgurl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop:true
        // Some Swiper option/callback...
      },
      swiperList: [
        {
          id: "0001",
          imgurl:
            "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01LwHuP72JJi0pnIXsM_!!2053469401.jpg"
        },
        {
          id: "0002",
          imgurl:
            "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01xsmWc92JJi0rHYxeh_!!2053469401.jpg"
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
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
  padding-bottom: 41%;

  .swiper-img {
    width: 100%;
  }
}
</style>