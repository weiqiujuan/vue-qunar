<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-search">
      <span class="iconfont search-icon">&#xe632;</span>
      <span class="search-title">输入城市/景点/游玩主题</span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="city-name">{{city}}</span>
        <span class="iconfont arrow-bottom">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Header",
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>


</style>
