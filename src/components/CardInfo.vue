<template>
  <div class="cardinfo" v-if="getCardInfo">
    <div class="cardinfo-item">
      <img :src="imgUrlOriginal + getCardInfo.backdrop_path" alt="" class="cardinfo-item__bg">
      <div class="cardinfo-item__content">
        <div class="cardinfo-item__content--text">
          <h1>{{ getCardInfo.title ? getCardInfo.title : getCardInfo.name }}</h1>
          <p>{{ getCardInfo.overview }}</p>
          <ul class="cardinfo-item__content--tag">
            <li>{{ new Date(getCardInfo.release_date).getFullYear() }},</li>
            <li v-for="(li, i) in getCardInfo.genres" :key="i">
              {{ li.name }}
            </li>
          </ul>
          <button class="cardinfo-item__btn" @click="openTrailer">
            <fa icon="fa-solid fa-play" />
            Смотерть трейлер
          </button>
        </div>
        <img :src="imgUrlOriginal + getCardInfo.poster_path" alt="" class="cardinfo-item__content--img">
        <div class="cardinfo-item__content--actors">
          <p>В главных ролях</p>
          <Actors :category="category" :id="id" count="6"/>
        </div>
      </div>
    </div>
    <div class="cardinfo-budget container" v-if="getCardInfo.budget">
      <div class="cardinfo-budget__item">
        <h5>Бюджет</h5>
        <p>${{ getCardInfo.budget }}</p>
      </div>
      <div class="cardinfo-budget__item">
        <h5>Сборы</h5>
        <p>${{ getCardInfo.revenue }}</p>
      </div>
      <div class="cardinfo-budget__item">
        <h5>Статус</h5>
        <p>{{ getCardInfo.status }}</p>
      </div>
      <div class="cardinfo-budget__item">
        <h5>Исходное название</h5>
        <p>{{ getCardInfo.original_title }}</p>
      </div>
    </div>
    <div class="cardinfo-rec container" v-if="getRecItems">
      <h3 class="cardinfo-rec__title">Рекомендации</h3>
      <div class="cardinfo-rec__items">
        <div class="contentinfo-card" v-for="(item, ind) in getRecItems" :key="ind">
          <img :src="imgUrlOriginal + item.backdrop_path" alt="" class="contentinfo-card__img" v-if="item.backdrop_path != null">
          <img :src="imgUrlOriginal + item.poster_path" alt="" class="contentinfo-card__img" v-else>
          <RouterLink :to="`/${category == 'movie' ? 'films' : 'serials'}/` + item.id" class="contentinfo-card__link" @click="reloadWin">
            {{ item.title ? item.title : item.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  
  <Trailer
    v-show="openOrCloseTrailer"
    @close="closeTrailer, selectItem = null"
    :selectId="selectId"
    :selectItem="selectItem"
  />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Trailer from '@/components/Trailer.vue'
export default {
  components: {Trailer},
  props: ['category', 'id'],
  data() {
    return {
      openOrCloseTrailer: false,
      selectId: null,
      selectItem: null,
    }
  },
  methods: {
    ...mapActions('infoblock', ['getInfoBlock']),
    ...mapActions('rec', ['getRec']),
    ...mapActions('trailer', ['getTrailer']),
    reloadWin(){
      setTimeout(() => {
        location.reload()
        window.scrollTo(0, 0)
      }, 100);
    },
    async openTrailer(){
      this.selectId = this.id
      this.openOrCloseTrailer = true
      await this.getTrailer({category: this.category, itemId: this.id})
      const info  = this.category == 'movie' ? 'movieVideo' : 'tvVideo'
      this.selectItem = this.$store.state.trailer[info]
      console.log(this.selectItem);
    },
    closeTrailer(bool){
      this.openOrCloseTrailer = bool
    }
  },
  computed: {
    ...mapState(['imgUrlOriginal']),
    getCardInfo(){
      const info  = this.category == 'movie' ? 'movieId' : 'tvId'
      return this.$store.state.infoblock[info]
    },
    getRecItems(){
      const info  = this.category == 'movie' ? 'moviesRec' : 'tvsRec'
      if(this.$store.state.rec[info].length == 0){
        return false
      }else{
        return this.$store.state.rec[info]
      }
    },
  },
  async created() {
    await this.getInfoBlock({category: this.category, itemId: this.id})
    await this.getRec({category: this.category, itemId: this.id})
    console.log(this.getCardInfo);
    console.log(this.getRecItems);
  },
}
</script>