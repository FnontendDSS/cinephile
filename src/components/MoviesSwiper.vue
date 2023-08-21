<template>
  <div class="popular">
    <RouterLink to="/films" class="popular-link">
      Фильмы <fa icon="fa-solid fa-chevron-right" />
    </RouterLink>
    
    <Swiper
      class="popular-slider"
      :space-between="24"
      :modules="modules"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <SwiperSlide 
        class="popular-slider__item" 
        :class="{active: selectedId == item.id}"
        v-for="(item, ind) in movies"
        :key="ind"
        :item="item"
        @click="getInfo(item, ind)"
        >
        <img :src="imgUrlOriginal + item.backdrop_path" alt="" class="popular-slider__item--img">
      </SwiperSlide>
      <SwiperSlide class="popular-slider__item">
        <RouterLink to="/films" class="popular-slider__item--link">
          <fa icon="fa-solid fa-chevron-right" />
          <span>Все фильмы</span>
        </RouterLink>
      </SwiperSlide>
    </Swiper>
    
    <InfoBlock
      :selectedId="selectedId"
      :selectedItem="selectedItem"
      :index="index"
      category="movie"
      @close="selectedId = null"
    />
  </div>
</template>

<script>
import InfoBlock from '@/components/InfoBlock.vue'
import { mapActions, mapState } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
export default {
  components: {Swiper,SwiperSlide,InfoBlock},
  data() {
    return {
      modules: [Navigation],
      swiperOptions: {
        breakpoints: {
          320: {slidesPerView: 2},
          768: {slidesPerView: 3},
          992: {slidesPerView: 4},
          1200: {slidesPerView: 5},
        }
      },
      selectedId: null,
      selectedItem: null,
      index: null,
    }
  },
  methods: {
    ...mapActions('popular', ['getPopular']),
    ...mapActions('infoblock', ['getInfoBlock']),
    async getInfo(item, ind){
      this.selectedItem = null
      this.selectedId = item.id
      this.index = ind
      await this.getInfoBlock({category: 'movie', itemId: item.id})
      this.selectedItem = this.movieId
      console.log(this.selectedItem);
    }
  },
  computed: {
    ...mapState('popular', ['movies']),
    ...mapState('infoblock', ['movieId']),
    ...mapState(['imgUrlOriginal']),
  },
  async created() {
    await this.getPopular({category: 'movie', page: 1})
  },
}
</script>