<template>
  <div class="hot">
    <div class="hot-title">
      <span class="title">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
             alt="本周热门榜单" class="mp-title-img">
      </span>
      <span class="more">全部榜单</span>
    </div>
    <ul class="hot-wrapper">
      <router-link tag="li" :to="'/detail/' + index" class="hot-item"
                   v-for="(item,index) in hotList" :key="index" :ref="'hot_'+index">
      <span class="top" v-if="index>=0 &&index<3">
          <img :src="topIcon[index]" class="top-img">
        </span>
        <img :src="item.imgUrl" class="hot-img">
        <p class="title">{{item.title}}</p>
        <p class="price">
          <span class="orange">{{item.price}}</span>起
        </p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Hot",
    props: {
      hotList: Array,
      topIcon: Array
    }

  }
</script>

<style scoped>

</style>
