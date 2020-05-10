<template>
    <div class="header">
        <div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
        <div class="header-input"><span class="iconfont search-icon">&#xe632;</span>请输入城市景点游玩主题</div>
        <router-link to="/city">
        <div class="header-right">
            <!-- {{this.$store.state.city}} -->
            <!-- {{this.city}} -->
            {{this.doubleCity}}
            <span class="iconfont iconjiantou arrow-icon"></span>
        </div>
        </router-link>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
//   之前city是通过父组件传递过来的现在不用这种方式了
//   props:{
//       city:String, //接收city这样的内容 他的类型是string 
//   },
computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
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
        min-width:1.04rem
        padding:0 .1rem
        display :flex
        justify-content :center 
        color :#fff
</style>
