<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201301/17/a1c12d165c8468e893835fbb.jpg_600x330_9488b269.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">艾山风景区成人票</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6f5;</span>2
        </div>
      </div>
    </div>
    <div>
      <common-gallary :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallary>
    </div>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallery: false,
      imgs: [
        "https://imgs.qunarzz.com/sight/p0/1507/ab/aa151511f558be9e6b3364332ef8955d.water.jpg_350x240_01f49b71.jpg",
        "https://imgs.qunarzz.com/sight/p0/1902/45/45a2b6db005d1e1ca3.img.jpg_350x240_e7f3b47f.jpg"
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
      console.log(this.showGallery);
    },
    handleGalleryClose() {
      this.showGallery = false;
      console.log(this.showGallery);
    }
  },
  components: {
    CommonGallary
  }
};
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.8) 100%
    );

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
      text-align: left;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>