<template>
  <header class="upcoming">
    <UpcomingItem
      v-for="(item, ind) in upcoming"
      :key="ind"
      :index="ind"
      :item="item"
      :next="upcoming[ind+1 == upcoming.length ? 0 : ind+1]"
      :slideView="slideView"
      @nextSlide="nextSlide"
    />
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UpcomingItem from '@/components/UpcomingItem.vue'
export default {
  components: {UpcomingItem},
  data() {
    return {
      slideView: 0,
      timeOut: null
    }
  },
  methods: {
    ...mapActions('upcoming', ['getUpcoming']),
    slide(){
      if(this.upcoming.length - 1 == this.slideView){
        this.slideView = 0
      }else{
        this.slideView++
      }
      this.timeOut = setTimeout(this.slide, 10000)
    },
    nextSlide(){
      clearTimeout(this.timeOut)
      this.slide()
    }
  },
  computed: {
    ...mapState('upcoming', ['path', 'upcoming'])
  },
  async created() {
    await this.getUpcoming()
    this.slide()
  },
}
</script>