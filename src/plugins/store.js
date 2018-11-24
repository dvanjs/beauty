import store from '@/store'

// About store
// Highly recommand to use Vuex
export default ({ Vue }) => {
  Vue.mixin({
    data() {
      return {
        $store: store
      }
    }
  })
}
