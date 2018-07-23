<template>
  <div>
    <imgs-header></imgs-header>
    <imgs-list></imgs-list>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'

  export default {
    name: "Imgs",
    components: {
      Header,
      List
    }
  }
</script>

<style scoped>

</style>
