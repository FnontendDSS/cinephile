<template>
  <Transition name="upcoming">
    <div class="upcoming-item" v-if="slideView == index">
      <div class="upcoming-item__content">
        <img :src="imgUrlOriginal + item.backdrop_path" alt="" class="upcoming-item__content--img">
        <div class="upcoming-item__content--text">
          <h1>{{item.title}}</h1>
          <p>{{item.overview}}</p>
          <BtnMore :id="item.id" page="movie"/>
        </div>
      </div>
      <div class="upcoming-item__next" @click="$emit('nextSlide')">
        <img :src="imgUrlOriginal + next.backdrop_path" alt="" class="upcoming-item__next--img">
        <div class="upcoming-item__next--text">
          <span>Следующий</span>
          <h4>{{next.title}}</h4>
        </div>
        <div class="upcoming-item__next--line"></div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['index','item','next','slideView'],
  computed: {
    ...mapState(['imgUrlOriginal'])
  },
}
</script>