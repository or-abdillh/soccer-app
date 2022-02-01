<template>
  <main class="pb-24">
    <!-- Brand -->
    <div class="flex gap-2 items-center justify-between">
      <h1 class="text-green-400 text-3xl font-semibold tracking-wide">Soccer.</h1>
      <i class="text-2xl text-green-400 far fa-futbol"></i>
    </div>
    
    
    <!-- Tag line -->
    <p class="text-gray-100 text-2xl font-semibold w-10/12 mt-10">
      Find the latest news from your favorite club here 👏
    </p>
    
    <!-- Recomended news -->
    <section class="mt-12">
      <span class="text-2xl inline-block flex items-center justify-between font-medium text-gray-50 mb-3">
        Recomended
        <i class="fa fa-chevron-right"></i>
      </span>
      <Slides :slides="headlines.news"/>
    </section>
    
    <!-- List card -->
    <section class="mt-8">
      <span class="text-2xl inline-block flex items-center justify-between font-medium text-gray-50 mb-3">
        Other news
        <i class="fa fa-chevron-down"></i>
      </span>
			<template v-for="(list, index) in otherNews.news" :key="index">
				<ListCard :list="list" />
			</template>
    </section>
  </main>
</template>

<script setup>
  import { onMounted, ref, computed } from 'vue'
  import { useHeadlines } from '@/stores/headlines'
  import { useOtherNews } from '@/stores/otherNews'
  import Slides from '@/components/Slides.vue'
  import ListCard from '@/components/ListCard.vue'
  import example from '@/example.js'

  const headlines = useHeadlines()
  const otherNews = useOtherNews()
  
  onMounted(() => {
  	headlines.fillHeadlines()
  	otherNews.fillOtherNews()
  })

</script>
