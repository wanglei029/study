<template>
<div>
  <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</div>
</template>
<script>
export default {
  name: "CitySearch"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search{
    height:.72rem
    background:$bgColor
    padding:0 .1rem
    .search-input{
        width:100%
        height:.6rem
        padding:0 .2rem
        line-height:.6rem
        text-align:center
        border-radius :.06rem
        color:#666
        box-sizing :border-box
    }

}
</style>