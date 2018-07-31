<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img :src="item" class="gallery-img" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallery",
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          autoplay: false,
          paginationType: 'fraction',
          observeParents: true,
          observer: true
        }
      }
    },
    props: {
      imgs: Array,
      currentImg: Number
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    watch: {
      currentImg() {
        this.swiper.slideTo(this.currentImg, 0, false)
      }
    },
    methods: {
      handleGalleryClick() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
