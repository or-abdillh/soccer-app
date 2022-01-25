<template>
  <main class="bg-dark-gray w-full md: 10/12 lg:4/12 xl:3/12 mx-auto lg:h-screen px-5 pt-4">
    <router-view></router-view>
    <BottomBar />
  </main>
</template>

<script setup>
  
  import BottomBar from '@/components/BottomBar.vue'
  
</script>