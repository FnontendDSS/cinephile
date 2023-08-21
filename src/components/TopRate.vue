<template>
  <div class="toprate">
    <h2 class="toprate-title">топ<span>10</span></h2>
  
    <Swiper
      class="toprate-slider"
      :space-between="24"
      :modules="modules"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <SwiperSlide 
        class="toprate-slider__item"
        v-for="(item, ind) in toprate"
        :key="ind"
        :item="item"
        >
        <img :src="imgUrlOriginal + item.backdrop_path" alt="" class="toprate-slider__item--img" v-if="item.backdrop_path != null">
        <img :src="imgUrlOriginal + item.poster_path" alt="" class="toprate-slider__item--img" v-else>
        <div class="toprate-slider__item--info">
          <p>{{ ind + 1 }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
export default {
  components: {Swiper,SwiperSlide},
  data() {
    return {
      modules: [Navigation],
      swiperOptions: {
        breakpoints: {
          320: {slidesPerView: 1},
          768: {slidesPerView: 2},
          992: {slidesPerView: 3},
        }
      },
    }
  },
  methods: {
    ...mapActions('toprate', ['getTopRate'])
  },
  computed: {
    ...mapState('toprate', ['toprate']),
    ...mapState(['imgUrlOriginal']),
  },
  async created() {
    await this.getTopRate()
  },
}
</script>