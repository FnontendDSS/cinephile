<template>
  <CardInfo category="movie" :id="$route.params.id"/>
</template>

<script>
import CardInfo from '@/components/CardInfo.vue'
export default {
  components: {CardInfo}
}
</script>