<template>
  <div class="icons">
    <swiper class="icon-wrapper" :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="item" v-for="(item,index) of page" :key="index">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img">
          </div>
          <p class="icon-title">{{item.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="location-wrapper border-top">
      <div class="location border-right"><span class="iconfont">&#xe611;</span>定位失败</div>
      <div class="location"><span class="iconfont">&#xe642;</span>五折泡温泉</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Icons",
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination:{
            el:'.swiper-pagination'
          }
        }
      }
    },
    computed: {
      pages() {
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        });
        return pages;
      }
    }
  }
</script>

<style scoped>

</style>
