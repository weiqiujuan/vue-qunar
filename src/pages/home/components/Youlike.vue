<template>
  <div class="youlike">
    <div class="like-title">
        <span class="title">
          <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢" class="mp-title-img">
          猜你喜欢
        </span>
    </div>
    <div class="item border-bottom" v-for="(item,index) in itemList"
         :key="index">
      <div class="item-img-wrapper">
        <img :src="item.imgUrl" alt="" class="item-img">
      </div>
      <div class="item-info">
        <div class="title">{{item.title}}</div>
        <div class="comment">
          <start :num="item.start" class="starts"></start>
          <div class="comment-num">{{item.comment_num}}条评论</div>
        </div>
        <div class="price-wrapper">
            <span class="price">
              <span class="orange">￥{{item.price}}</span>起
            </span>
          <span class="address">{{item.address}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Start from '@/common/start/Start'

  export default {
    name: "Youlike",
    components: {
      Start
    },
    props: {
      itemList: Array
    }
  }
</script>

<style scoped>

</style>
