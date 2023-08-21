<template>
  <div class="popular-info" :class="{active: selectedId != null}">
    <button class="popular-info__close" @click="$emit('close')">
      <fa icon="fa-solid fa-xmark" />
    </button>
    
    <Transition name="infoblock">
      <div class="popular-info__content" v-if="selectedItem">
        <img :src="imgUrlOriginal + selectedItem.backdrop_path" alt="" class="popular-info__content--img" v-if="selectedItem.backdrop_path != null">
        <img :src="imgUrlOriginal + selectedItem.poster_path" alt="" class="popular-info__content--img" v-else>
        <div class="popular-info__content--text">
          <h2>{{ selectedItem.title ? selectedItem.title : selectedItem.name }}</h2>
          <p>{{ selectedItem.overview }}</p>
          <ul class="popular-info__content--tag">
            <li v-for="(tag, key) in selectedItem.genres" :key="key">
              {{ tag.name }}
            </li>
          </ul>
          <div class="popular-info__content--actors">
            <Actors :category="category" :id="selectedId" count="4"/>
          </div>
          <BtnMore :page="category" :id="selectedId"/>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['selectedId','selectedItem','index','category'],
  computed: {
    ...mapState(['imgUrlOriginal']),
  },
}
</script>