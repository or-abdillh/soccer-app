<template>
  <main class="bg-dark-gray w-full min-h-screen md:w-8/12 lg:w-4/12 xl:w-3/12 mx-auto px-5 pt-4">
    <router-view></router-view>
    <BottomBar />
  </main>
</template>

<script setup>
  
  import BottomBar from '@/components/BottomBar.vue'
  
</script>
