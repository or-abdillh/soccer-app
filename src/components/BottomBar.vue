<template>
  <!-- Wrapper -->
  <main v-if="usingBottomBar" class="fixed bottom-0 left-0 right-0">
    <!-- Bottom bar -->
    <div class="w-full md:w-8/12 lg:w-4/12 xl:w-3/12 mx-auto bg-slate-800 bg-opacity-100 px-5 py-3 flex justify-between">
      <template v-for="(menu, index) in menus" :key="index">
        <div
          @click="move(menu)"
          :class="menuActive === menu.name ? 'text-green-400 font-medium tracking-wide' : 'text-gray-500'"
          class="active:scale-75 duration-300 flex flex-col items-center">
          <i class=" text-2xl relative" :class="menu.icon">
						<span class="absolute top-0 -right-2 bg-red-700 opacity-75 rounded-full text-xs text-gray-200 px-1" v-if="menu.name === 'Collections'">
							{{ collections.lists.length }}
						</span>
          </i>
          <small>{{ menu.name }}</small>
        </div>
      </template>
    </div>
  </main>
</template>

<script setup>
  
  import { ref, computed, onMounted, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import menus from '@/menu.js'

  const router = useRouter()
  const route = useRoute()
  const menuActive = computed(() => route.name);

  const move = menu => {
  	menuActive.value = menu.name
  	collections.value = JSON.parse(localStorage.getItem('$collections'))
  	
  	setTimeout(() => {
  		router.push({ name: menu.path })
  	}, 500)
  }

	const pathName = computed(() => route.name)
	const collections = ref()

	watch(pathName, val => collections.value = JSON.parse(localStorage.getItem('$collections')))
	
  const usingBottomBar = computed(() => {
  	if (
  		menus.filter(menu => menu.name === pathName.value).length > 0
  	) return true
  	else return false
  })

  
</script>
