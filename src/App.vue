<template>
  <main class="bg-dark-gray w-full md: 10/12 lg:4/12 xl:3/12 mx-auto h-screen px-5 py-4">
    <router-view></router-view>
    <BottomBar />
  </main>
</template>

<script setup>
  
  import BottomBar from '@/components/BottomBar.vue'
  
</script>