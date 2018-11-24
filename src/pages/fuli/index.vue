<template>
  <div>

    <p v-if="!items.length > 0" style="text-align: center; color: #777;">加载中...</p>

    <ImageCard
      v-for="(item, key) in items"
      :key="key"
      :item="item"
    ></ImageCard>

  </div>
</template>

<script>
import store from '@/store'
import ImageCard from '@/components/fuli/ImageCard'

export default {
  components: {
    ImageCard
  },

  computed: {
    items() {
      return store.state.items
    },
    count() {
      return store.state.count
    }
  },

  watch: {
    count(val) {
      store.pushItems(val)
    }
  },

  created() {
    window.addEventListener('scroll', () => {
      if (Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.body.offsetHeight) {
        store.commit('count', store.getState('count') + 1)
      }
    })
  },

  destory() {
    window.removeEventListener('scroll')
  }
}
</script>
