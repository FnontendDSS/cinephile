<template>
  <div class="actors" v-for="(item, ind) in getInfoActors" :key="ind">
    <img :src="imgUrlW500 + item.profile_path" alt="" class="actors-img">
    <div class="actors-name">{{ item.name }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['category','id','count'],
  methods: {
    ...mapActions('actors', ['getActors'])
  },
  computed: {
    ...mapState(['imgUrlW500']),
    getInfoActors(){
      const info = this.category == 'movie' ? 'movieActors' : 'tvActors'
      const res = this.$store.state.actors[info]
      return res
    }
  },
  async created() {
    await this.getActors({category: this.category, id: this.id, count: this.count})
  },
}
</script>