<template>
  <div>
    <header></header>
    <swiper :list="swiperList"></swiper>
    <icons :list="iconList"></icons>
    <hot :hotList="hotList" :topIcon="topIcon"></hot>
    <youLike :itemList="itemList"></youLike>
    <weekend :list="weekendList"></weekend>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Swiper from './components/Swiper'
  import Weekend from './components/Weekend'
  import Icons from './components/Icons'
  import Hot from './components/Hot'
  import YouLike from './components/Youlike'
  import axios from 'axios'
  import ApiUrl from '@/config/api_url';
  import {mapState} from 'vuex'

  export default {
    name: "Home",
    components: {
      Header,
      Swiper,
      Weekend,
      Icons,
      Hot,
      YouLike
    },
    data() {
      return {
        swiperList: [],
        hotList: [],
        iconList: [],
        topIcon: [],
        itemList: [],
        weekendList: []

      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo() {
        axios.get(ApiUrl.api + 'index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.hotList = data.hotList;
          this.itemList = data.itemList;
          this.weekendList = data.weekendList
        }
      }
    },
    mounted() {
      this.getHomeInfo();
    }/*,
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    }*/
  }
</script>

<style scoped>

</style>
