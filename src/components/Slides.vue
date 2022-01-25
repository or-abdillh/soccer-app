<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
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
        <img class="rounded-xl" :src="slide.imageUrl">
        <div class="p-3 flex flex-col justify-center inset-0 bg-opacity-50 absolute">
          <p class="text-gray-200 text-base font-semibold">{{ slide.title }}</p>
          <small class="mt-3 text-gray-200 font-medium">
            By {{ slide.creator.join(' ') }}
            on {{ slide.pubDate }} 
          </small>
        </div>
      </SplideSlide>
    </template>
  </Splide>
</template>

<style scoped>
  
  img {
    filter: opacity(.45) brightness(.85);
  }
  
</style>