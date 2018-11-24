<script>
export default {
  name: 'Header',

  render(h) {
    return h(
      'header',
      {
        class: 'header'
      },
      this.$slots.default || this.title
    )
  },

  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
.header {
  background-color #58a
  color #fff
  text-align center
  height 2.5rem
  line-height @height
}
</style>
