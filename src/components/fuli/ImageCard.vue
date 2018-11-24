<template>
  <div class="ImageContain">
    <img :src="item.imageUrl">
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="stylus" scoped>
.ImageContain {
  display flex
  justify-content center
  padding 10px 0

  img {
    width 100%
    height 100%
  }
}
</style>
