<template>
  <ul class="start-wrapper">
    <li class="start" v-for="(item,index) in startList" :key="index">
      <span :class="['iconfont',item===1?'active':'']">&#xe8c2;</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Start",
    props: {
      num: Number
    },
    computed: {
      startList() {
        const res = [];
        for (let i = 0; i < 5; i++) {
          if (i < this.num) {
            res.push(1)
          } else {
            res.push(0)
          }
        }
        return res;
      }
    }
  }
</script>

<style scoped>

</style>
