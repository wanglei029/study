<template>
    <div class="header">
        <div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
        <div class="header-input"><span class="iconfont search-icon">&#xe632;</span>请输入城市景点游玩主题</div>
        <router-link to="/city">
        <div class="header-right">{{this.city}}<span class="iconfont iconjiantou arrow-icon"></span></div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props:{
      city:String, //接收city这样的内容 他的类型是string 
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    display:flex
    height:$headerHeight
    background:$bgColor
    justify-content :space-around
    color:#fff
    line-height:$headerHeight
    .header-left
        width: .94rem
        .back-icon
            align-items :baseline
    .header-input
        flex: 1
        height:.64rem
        margin-top:.12rem
        background:#fff
        border-radius:.1rem
        color:#ccc
        line-height :.64rem
        text-align :left
        padding-left:.2rem
        display:flex
        .search-icon
            margin-right :.1rem
    .header-right
        width:1.24rem
        display :flex
        justify-content :center 
        color :#fff
</style>
