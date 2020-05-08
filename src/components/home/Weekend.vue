<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0004",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0005",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0006",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0007",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0008",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0009",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0010",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "人气经典款39元起人气经典款39元起人气经典款39元起",
          desc:
            "人气经典款39元起人气经典款39元起人气经典款39元起人气经典款39元起"
        },
        {
          id: "0011",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
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

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;

  .item-img {
    width: 100%;
  }
}

.item-info {
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
}
</style>