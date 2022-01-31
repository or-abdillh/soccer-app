<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import SlideContent from '@/components/SlideContent.vue'
  import { ref } from 'vue'
  
  defineProps({
    slides: {
      type: Array
    }
  })
  
  const options = ref({
    type: 'loop',
    autoplay: true,
    arrows: false,
    perpage: 1
  })
</script>

<template>
  <Splide :options="options">
    <template v-for="(slide, index) in slides" :key="index">
      <SplideSlide class="relative overflow-hidden">
        <SlideContent :content="slide"/>
      </SplideSlide>
    </template>
  </Splide>
</template>

<style scoped>
  
  img {
    filter: opacity(.45) brightness(.85);
  }
  
</style>
