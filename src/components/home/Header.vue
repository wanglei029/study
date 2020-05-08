<template>
    <div class="header">
        <div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
        <div class="header-input"><span class="iconfont search-icon">&#xe632;</span>请输入城市景点游玩主题</div>
        <div class="header-right">城市<span class="iconfont iconjiantou arrow-icon"></span></div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    display:flex
    height:.86rem
    background:$bgColor
    justify-content :space-around
    color:#fff
    line-height:.86rem
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
</style>
