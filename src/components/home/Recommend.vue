<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0002",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0003",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0004",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0005",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0006",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0007",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0008",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0009",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0010",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0011",
          imgUrl:
            "https://img.alicdn.com/imgextra/i4/1918385168/O1CN01m87kCO1o2zSlFejK8_!!1918385168-0-lubanu-s.jpg_310x310.jpg_.webp",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    text-align: left;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
      line-height: 0.44rem;
      margin-top: 0.16rem;
    }
  }
}
</style>