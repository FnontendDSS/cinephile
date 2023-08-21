<template>
  <Transition name="trailer">
    <div class="trailer" v-if="selectItem">
      <button class="trailer-close" @click="$emit('close', false)">
        <fa icon="fa-solid fa-xmark" />
      </button>
      
      <div class="trailer-content">
        <iframe 
          v-for="item in selectItem" :key="item"
          :src="'https://www.youtube.com/embed/' + item.key" 
          class="trailer-content__video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ['selectId', 'selectItem']
}
</script>