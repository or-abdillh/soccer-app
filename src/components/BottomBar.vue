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
						<span class="absolute top-0 -right-2 bg-red-700 opacity-75 rounded-full text-xs text-gray-200 px-1" v-if="menu.name === 'Collections' && pathName !== 'Collections'">
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
  const menuActive = ref('Home')
	const pathName = computed(() => route.name)
	
  const move = menu => {  	
  	setTimeout(() => {
  		router.push({ name: menu.path })
  	}, 500)
  }

	const collections = ref(
		JSON.parse(localStorage.getItem('$collections'))
	)
	const usingBottomBar = ref(true)
	
	watch(pathName, value => {

		menuActive.value = value
		collections.value = JSON.parse(localStorage.getItem('$collections'))
	
  	if ( menus.filter(menu => menu.name === value).length > 0){
			usingBottomBar.value = true
  	} else {
  		usingBottomBar.value = false
  	}
	})
	
  
</script>
