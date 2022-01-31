<script setup>
	import { useRoute } from 'vue-router'
	import { computed, ref } from 'vue'
	import Back from '@/components/Back.vue'
	
	const route = useRoute()
	const content = computed(() => JSON.parse(route.params.content))

	const isButtonClick = ref(false)
</script>

<template>
	<Back />
	<main class="mt-5 pt-12 pb-5">
		<small class="text-gray-200 mb-3 inline-block">
			{{ content.source.name }}
			<br />
			{{ content.author }}
		</small>
		
		<h1 class="text-gray-50 text-2xl font-medium">{{ content.title }}</h1>
		<img :src="content.urlToImage" class="w-full my-5 rounded-xl" />
		<p class="text-gray-50 text-base">{{ content.content }}</p>
		
		<div class="w-full mt-12 flex gap-2 justify-between">
			<a :href="content.url" class="w-10/12 bg-green-500 text-gray-100 block hover:bg-opacity-75 active:scale-90 duration-300 text-center text-xl font-medium py-2 rounded">Read more</a>
			<button @click="isButtonClick = !isButtonClick" class="w-2/12 border-2 border-green-500 rounded py-2 text-xl pointer text-center duration-300 text-green-500">
				<i :class="isButtonClick ? 'fas' : 'far'" class="fa-heart"></i>
			</button>
		</div>
	</main>
</template>
