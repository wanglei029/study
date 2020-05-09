<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{list:Array},
  data() {
    return {
      // iconList: [
      //   {
      //     id: "0001",
      //     desc: "疯抢排行",
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i3/2053469401/O1CN01aQpA9S2JJi0NslMQb_!!2053469401.gif"
      //   },
      //   {
      //     id: "0002",
      //     desc: "9.9包邮",
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01yAF5em2JJi03dO5Rt_!!2053469401.png"
      //   },
      //   {
      //     id: "0003",
      //     desc: "品牌特卖品牌特卖品牌特卖",
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i3/2053469401/O1CN016LSPRa2JJi06FDPGB_!!2053469401.gif"
      //   },
      //   {
      //     id: "0004",
      //     desc: "每日半价",
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01VHkeLW2JJi03dNHba_!!2053469401.png"
      //   },
      //   {
      //     id: "0005",
      //     desc:'折上折',
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01cUcsnS2JJi03dPxrH_!!2053469401.png"
      //   },
      //   {
      //     id: "0006",
      //     desc:'阿里健康',
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i1/2053469401/O1CN01RLtQDC2JJhzzrcYQ1_!!2053469401.png"
      //   },
      //   {
      //     id: "0007",
      //     desc:'口碑',
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Kl54Hm2JJi0M4oJzL_!!2053469401.png"
      //   },
      //   {
      //     id: "0008",
      //     desc:'饿了么',
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i3/2053469401/O1CN011PKStB2JJi01MxH6f_!!2053469401.gif"
      //   },
      //   {
      //     id: "0009",
      //     desc:'生活影视',
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01X8iL1T2JJi03pYgE1_!!2053469401.png"
      //   },
      //   {
      //     id: "00010",
      //     desc:'限时爆品',
      //     imgUrl:
      //       "https://img.alicdn.com/imgextra/i2/2053469401/O1CN01cd4Sbe2JJi0BtsCQ9_!!2053469401.png"
      //   }
      // ]
    };
  },
  computed: {
      pages(){
          const pages=[]
          this.list.forEach((item,index)=>{
              const page=Math.floor(index/8)
              if(!pages[page]){
                  pages[page]=[]
              }
              pages[page].push(item)
          })
          return pages
      }
  },

};
</script>
/***
当margin或者padding取值是百分比的时候，
无论是left，right或者top，bottom，
都是以父元素的width为参考物，进行提前占位，
避免资源加载时候的闪烁，还可以让高度自适应。
**/
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons>>>.swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top:.1rem

  .icon {
    position: relative;
    overflow: hidden;
    height: 0;
    float: left;
    width: 25%;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      ellipsis()
    }
  }
}
</style>