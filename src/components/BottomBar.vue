<template>
  <!-- Wrapper -->
  <div class="fixed bottom-0 left-0 right-0">
    <!-- Bottom bar -->
    <div class="w-full md:w-8/12 lg:w-4/12 xl:w-3/12 mx-auto bg-slate-800 bg-opacity-100 px-5 py-3 flex justify-between">
      <template v-for="(menu, index) in menus" :key="index">
        <div
          @click="move(menu)"
          :class="menuActive === menu.name ? 'text-green-400 font-medium tracking-wide' : 'text-gray-500'"
          class="active:scale-75 duration-300 flex flex-col items-center">
          <i class=" text-2xl" :class="menu.icon"></i>
          <small>{{ menu.name }}</small>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import menus from '@/menu.js'

  const router = useRouter()
  const menuActive = ref('Home');

  const move = menu => {
  	menuActive.value = menu.name
  	setTimeout(() => {
  		router.push({ name: menu.path })
  	}, 500)
  }
  
</script>
